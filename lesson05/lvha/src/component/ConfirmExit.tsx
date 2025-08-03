import React, { useEffect } from "react";

export default function ConfirmExit() {
  //   useEffect(() => {
  //     const handleBeforeUnload = (event) => {
  //       event.preventDefault();
  //       event.returnValue = "Bạn có chắc chắn muốn rời đi?";
  //     };

  //     window.addEventListener("beforeunload", handleBeforeUnload);

  //     return () => {
  //       window.removeEventListener("beforeunload", handleBeforeUnload);
  //     };
  //   }, []);

  return (
    <div>
      <h2>Trang web này sẽ cảnh báo khi bạn rời đi !</h2>
    </div>
  );
}
