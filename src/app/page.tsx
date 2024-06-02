import AddCategory from "@/components/addCategory/AddCategory";
import AllImages from "@/components/allImages/AllImages";
import Navbar from "@/components/navar/Navbar";
import CategoryModal from "@/components/shared/InPutModal/CategoryModal";
import Modal from "@/components/shared/InPutModal/Modal";

const homePage = () => {
  return (
    <div className="max-w-7xl">
      <div className="flex justify-between items-center my-12">
        <Navbar />
        <div className="flex gap-4">
          <Modal />
          <CategoryModal />
        </div>
      </div>
      <AllImages />
    </div>
  );
};

export default homePage;
