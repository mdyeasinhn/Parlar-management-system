import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authServices } from "./auth.service";

const register = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.registerUser(req.body)

  // Set token as HttpOnly cookie
  res.cookie('token', result.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.CREATED,
    message: 'User registered successfully',
    data: {
      user: result.verifiedUser,
    }
  })
});

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await authServices.loginUser(req.body)

  // Set token as HttpOnly cookie
  res.cookie('token', result.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  })

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: 'Login successful',
    data: {
      user: result.verifiedUser,
    }
  })
});

const changePassword = catchAsync(async (req: Request, res: Response) => {
  const { ...passwordData } = req.body;
  const user = req.user;
  if (!user) {
    throw new Error('User not found');
  }
  const userData = {
    userId: user._id.toString(),
    email: user.email,
    role: user.role,
  };
  const result = await authServices.changePassword(userData, passwordData);

  sendResponse(res, {
    success: true,
    statusCode: StatusCodes.OK,
    message: "Password is updated successfully!",
    data: result,
  })
})
export const authController = {
  register,
  login,
  changePassword
}