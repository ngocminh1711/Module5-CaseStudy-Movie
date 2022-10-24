import {IconButton} from "@mui/material";
import {PhotoCamera} from "@mui/icons-material";
import Button from "@mui/material/Button";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import storage from "../../../firebaseConfig";
import {createBackdropURL, createImageURL} from "../../../features/createImage/createImageSlice";


function CreateImage() {

    const [file, setFile] = useState("");
    const [percentBackdrop, setPercentBackdrop] = useState(0);
    const [percentDetail, setPercentDetail] = useState(0);

    const dispatch = useDispatch();


    const handleChangeBackdrop = (event) => {
        setFile(event.target.files[0])
    }
    const handleChangeDetail = (event) => {
        setFile(event.target.files[0])
    }
    const handleUploadBackdrop = () => {
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
                setPercentBackdrop(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {

                    dispatch(createBackdropURL(url))
                });
            }
        );
    }
    const handleUploadDetail = () => {
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
                setPercentDetail(percent);
            },
            (err) => console.log(err),
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {

                    dispatch(createImageURL(url))
                });
            }
        );
    }


    return (
        <>
            <p>{percentBackdrop}"%"</p>
            <div>
                <input
                    type="file"
                    onChange={handleChangeBackdrop}
                />
                <Button
                    variant="contained"
                    component="label"
                    style={{marginLeft: '20px'}}
                    onClick={handleUploadBackdrop}
                >
                    <PhotoCamera/>
                    Upload Backdrop_path
                </Button>
            </div>

            <p>{percentDetail}"%"</p>
            <div>
                <input
                    type="file"
                    onChange={handleChangeDetail}
                />
                <Button
                    variant="contained"
                    component="label"
                    style={{marginLeft: '20px'}}
                    onClick={handleUploadDetail}
                >
                    <PhotoCamera/>
                    Upload Detail_image
                </Button>
            </div>
        </>

        )

}


export default CreateImage;