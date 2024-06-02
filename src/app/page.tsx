import AllImages from "@/components/allImages/AllImages";
import UploadPage from "@/components/imageUpload/ImageUpload";

const homePage = () => {
  return (
    <div>
      <h1>Upload Image</h1>
      <UploadPage></UploadPage>
      <AllImages />
    </div>
  );
};

export default homePage;
