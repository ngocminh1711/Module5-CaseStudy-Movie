import Button from "@mui/material/Button";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {useState} from "react";
import storage from "../../../firebaseConfig";
import {useDispatch} from "react-redux";
import {createVideoURL} from "../../../features/createVideo/createVideoSlice";


function CreateVideo () {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    const dispatch = useDispatch();


    const handleChangeVideo = (event) => {
        setFile(event.target.files[0])
    }


    const handleUploadVideo = () => {
        if (!file) {
            alert("Please choose a file first!")
        }

        const storageRef = ref(storage, `/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    dispatch(createVideoURL(url))
                });
            }
        );
    }
    return (
        <>
            <p>{percent}"%"</p>
            <input
            type="file"
            onChange={handleChangeVideo}
            defaultValue=''
        />

            <Button
                variant="contained"
                component="label"
                style={{marginLeft: '20px'}}
                onClick={handleUploadVideo}
            >
                Upload Video
            </Button>
        </>


    )

}

export default CreateVideo;