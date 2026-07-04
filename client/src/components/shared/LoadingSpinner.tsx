"use client";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF5F1]">
      <div className="relative flex items-center justify-center">
        
        {/* 1. Outer Soft Glow Pulse */}
        <div className="absolute w-24 h-24 bg-[#EC4D87] opacity-10 rounded-full animate-ping"></div>

        {/* 2. Rotating Dash Ring (The Petal Base) */}
        <div className="w-20 h-20 border-4 border-transparent border-t-[#EC4D87] border-r-[#EC4D87] rounded-full animate-spin"></div>

        {/* 3. Reverse Rotating Inner Ring */}
        <div className="absolute w-12 h-12 border-4 border-transparent border-b-[#EC4D87] border-l-[#EC4D87] rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>

        {/* 4. Center Pulsing Beauty Dot */}
        <div className="absolute w-4 h-4 bg-[#EC4D87] rounded-full shadow-[0_0_15px_rgba(236,77,135,0.6)] animate-pulse"></div>

        {/* 5. Small Orbiting Petals */}
        <div className="absolute w-full h-full animate-[spin_3s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#EC4D87] rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#EC4D87] rounded-full"></div>
        </div>

      </div>
    </div>
  );
};

export default LoadingSpinner;