import errorImg from "../../assets/errors.avif"

const ErrorPage = () => {
    return (
        <div>
            <img className="w-auto h-screen mx-auto " src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;