import { errorImg } from "../assets/images/photos"
export default function ErrorPage() {
    return <>
    <figure>
    <figcaption><h2>404 Page not Found</h2></figcaption>
    <img className="error-img"src={errorImg} alt="error-page"/>
    </figure>
    </>
}