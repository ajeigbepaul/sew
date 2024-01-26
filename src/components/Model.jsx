// import Video from "../public/sowitvideo.mp4";
function Model() {
  return (
    <div className="h-[70vh] w-full bg-black">
      {/* <video autoPlay loop className="h-full w-full object-cover">
        <source src={Video} type="video/mp4" />
      </video> */}
      <img
        src="/fashionbg2.jpg"
        alt="fashionbg"
        width={500}
        height={500}
        className="w-full object-contain h-full "
      />
    </div>
  );
}

export default Model;
