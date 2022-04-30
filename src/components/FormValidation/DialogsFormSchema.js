import * as Yup from "yup";

const dialogsFormSchema = Yup.object().shape({
    newMessage: Yup.string()
        .max(1000, "Must not be longer than 1000 characters")
});
export default dialogsFormSchema;
