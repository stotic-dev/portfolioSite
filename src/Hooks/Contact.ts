import { useEffect, useRef, useState } from "react"
import { ContactInfo } from "../Models/Classes/ContactInfo";
import { validate } from "class-validator";

export const useContact = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const contactRef = useRef<HTMLTextAreaElement>(null);

    const [changeFlg, setFlg] = useState(false);
    const [errors, setErrors] = useState<({ [type: string]: string; } | undefined)[]>([]);

    useEffect(() => {
        console.log(`debug log: ${changeFlg}`);
        
        if(changeFlg){
            console.log(`debug log: ${nameRef.current?.value}`);
            const item = new ContactInfo(nameRef.current?.value, emailRef.current?.value, contactRef.current?.value);
            validate(item).then(errors => {
                console.log(errors);

                if (errors.length > 0) {
                    setErrors(errors.map(value => { return value.constraints }));
                    
                }else{
                    setErrors([]);
                }

            })
        }

    }, [changeFlg])

    return { nameRef, emailRef, contactRef, errors, setFlg, changeFlg }
}