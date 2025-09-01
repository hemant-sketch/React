import { useState } from "react";
import { useFormik } from 'formik';
import './Comment.jsx';

const validate = values => {
   const errors = {};
   if (!values.userName) {
     errors.userName = "Username cannot be empty";
   }
   return errors;
};

export default function CommentsForm({addNewComment}) {
    // let [formData, setFormData] = useState({
    //     userName : "",
    //     remarks : "",
    //     ratings : 5
    // })

    const formik = useFormik({
    initialValues: {
        userName : "",
        remarks : "",
        ratings : 5,
    },
    validate,
    onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
    }
})


    // let handleInputChange = (event)=> {
    //    setFormData ((currData) => {
    //         return {
    //             ...currData,
    //             [event.target.name] : event.target.value
    //         }
    //    })
    // }

    // let handleSubmit = (event)=>{
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData({
    //         userName : "",
    //         remarks : "",
    //         ratings : 5
    //     })
        
    // }

    return (
        <div>
            <h4>Give a comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="userName">Username</label>
                <input placeholder="userName" 
                type="text" 
                value={formik.values.userName}
                onChange={formik.handleChange}
                id="userName"
                name="userName"
                />
                {formik.errors.userName ? <p style={{color: "red"}}>{formik.errors.userName}</p> : null}
                <br/><br/>

                <label htmlFor="remarks">Remarks</label>
                <textarea 
                value={formik.values.remarks} 
                placeholder="add few remarks"
                onChange={formik.handleChange}
                id="remarks"
                name="remarks"
                >Remarks</textarea><br/><br/>
                
                <label htmlFor="ratings">Ratings</label>
                <input placeholder="ratings" 
                type="number" 
                value={formik.values.ratings}
                min={1} max={5} 
                onChange={formik.handleChange}
                id="ratings"
                name="ratings"
                /><br/><br/>

                <button>Add Comment</button>
            </form>
        </div>
    )
}