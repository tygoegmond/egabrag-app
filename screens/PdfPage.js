import react from "react";
import { WebView } from "react-native-webview";
import { useState, useEffect } from "react";
import * as Securestore from "expo-secure-store";
export default function Pdfpage() {
  const [link, Setlink] = useState(null);
  useEffect(() => {
    (async () => {
      const link = await Securestore.getItemAsync("link");
      Setlink(link);
    })();
  });
  var ref;
  return (
    link != null && (
      <WebView
        ref={(webref) => (ref = webref)}
        source={{
          uri: link,
        }}
        onLoadEnd={(e) => {
          var { nativeEvent } = e;
          if (nativeEvent.title === "") {
            ref.reload();
            console.log("err");
          }
        }}
      />
    )
  );
}
