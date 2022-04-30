import * as Yup from "yup";

const postFormSchema = Yup.object().shape({
    newPost: Yup.string()
        .max(3000, "Must not be longer than 3000 characters")
});
export default postFormSchema;
