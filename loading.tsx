export default function Loading({ progress, buttonClicked }: Readonly<{ progress?: number, buttonClicked?: boolean }>) {
    const displayProgress = progress !== undefined ? Math.max(progress, 0.1) : 0;
    return (
        <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            {progress !== undefined && buttonClicked ? (
                <div className="relative">
                    <div className="relative flex items-center justify-center rounded-full w-48 h-48">
                        <svg className="w-full h-full" viewBox="0 0 80 80">
                            <circle
                                className="text-gray-200"
                                strokeWidth="4"
                                stroke="currentColor"
                                fill="transparent"
                                r="36"
                                cx="40"
                                cy="40"
                            />
                            <circle
                                className="text-blue-600"
                                strokeWidth="4"
                                strokeDasharray="226.195"
                                strokeDashoffset={226.195 - (displayProgress / 100) * 226.195}
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="36"
                                cx="40"
                                cy="40"
                                transform="rotate(-90 40 40)"
                            />
                        </svg>
                        <div className="absolute flex items-center justify-center rounded-full w-24 h-24">
                                <span className="text-white font-semibold text-lg">{displayProgress.toFixed(2)}%</span>
                        </div>
                    </div>
                </div>
            ) : <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>}
        </div>
    );
}