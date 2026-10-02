import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { reviewService } from "./review.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";

// Create a review 
const createReview = catchAsync(async (req: Request, res: Response) => {
    const user = req.user;
    if (!user) {
        throw new Error('User not found');
    }
    const { service, rating, comment } = req.body;

    const result = await reviewService.createReview({
        user: user._id,
        service,
        rating,
        comment,
    });

    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Review is posted successfully!',
        data: result,
    });

});

// Get all reviews
const getAllReviews = catchAsync(async (req: Request, res: Response) => {
    const result = await reviewService.getAllReviews();
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        message: 'Reveiws retrieved succesfully!',
        data: result,
    })
});

export const reviewController = {
    createReview,
    getAllReviews
}