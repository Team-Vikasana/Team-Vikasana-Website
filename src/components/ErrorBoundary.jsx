import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="bg-slate-950 md:translate-x-[130%] w-fit text-white rounded-2xl p-4 h-full text-wrap content-center animate-pulse">
                    Uh oh, Please wait... Maybe the servers are sleeping!!!
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
