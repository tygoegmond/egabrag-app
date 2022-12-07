import { WebView } from "react-native-webview";

export default function Pdfpage() {
  var ref;
  return (
    <WebView
      ref={(webref) => (ref = webref)}
      source={{
        uri: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://africau.edu/images/default/sample.pdf",
      }}
      onLoadEnd={(e) => {
        var { nativeEvent } = e;
        if (nativeEvent.title === "") {
          ref.reload();
          console.log("err");
        }
      }}
    />
  );
}