import AllImages from "@/components/allImages/AllImages";
import UploadPage from "@/components/imageUpload/ImageUpload";
import Modal from "@/components/shared/InPutModal/Modal";

const homePage = () => {
  return (
    <div>
      <h1>Upload Image</h1>
      <Modal></Modal>
      <AllImages />
    </div>
  );
};

export default homePage;
