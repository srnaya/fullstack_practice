
import mongoose,{Schema} from "mongoose";


const studentSchema = new Schema({
    name:{
        require:[true,"Name field is required"],
        type:Schema.Types.String
    },
    email:{
        require:[true,"Email field is required"],
        type:Schema.Types.String,
        unique:true,
        trim:true
    },
    password:{
        require:[true,"Password field is required"],
        type:Schema.Types.String
    }
});

export const Student = mongoose.models.Student || mongoose.model("Student",studentSchema)