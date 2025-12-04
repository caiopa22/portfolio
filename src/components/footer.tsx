import { LiaGithub, LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

export default function Footer() {

    return (
        <footer className="flex flex-col p-16">
            <div>
                <h1 className="text-5xl font-bold text-foreground">Vamos nos conectar!</h1>
                <p className="ml-2 mt-2 text-lg text-foreground">caiopacheco060@gmail.com</p>
                <div className="flex gap-2 mt-4">
                    <LiaLinkedin size={36} color="#7b2cbf" />
                    <LiaGithub size={36} color="#7b2cbf" />
                    <MdEmail size={36} color="#7b2cbf" />
                </div>
            </div>
        </footer>
    );
}