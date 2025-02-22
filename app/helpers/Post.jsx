import ImageUpload from "../components/client/ImageUpload";
import Confirm from "../components/server/Confirm/Confirm";

const Post = ({ showPopup, setShowPopup, step, setStep }) => {
  return (
    <div className="post max-w-2xl min-h-screen mx-auto text-white">
      <div className="coaches_heading">
        <h2>Post</h2>
      </div>

      {showPopup && (step === 1 || step === 2) && (
        <div className="modal-overlay">
          {step === 1 && (
            <Confirm
              title="Inform them"
              desc="Are you sure you want to delete this Trainer?"
              closePopup={() => setShowPopup(false)}
              onClick={() => setStep(2)}
              istrue={true}
            />
          )}
          {step === 2 && (
            <Confirm title="You have added a Post" closePopup={() => setShowPopup(false)} />
          )}
        </div>
      )}

      <div className="input_box">
        <h2 className="text-[20px] mb-[15px]">Topic Description</h2>
        <textarea
          type="text"
          placeholder="Description Here"
          className="!w-[434px] !h-[180px]"
        />
      </div>

      <ImageUpload />
    </div>
  );
};

export default Post;
