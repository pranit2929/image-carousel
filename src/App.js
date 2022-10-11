import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
const images = [
  { image: "https://i.postimg.cc/pr0TLLC8/blue-1.png" },
  {
    image: "https://i.postimg.cc/Y28j3d79/pink-1.png"
  },
  { image: "https://i.postimg.cc/CL156bM4/yellow-1.png" }
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(1);
  const length = images.length;

  const nextSlide = () => {
    const a = images[0];
    const b = images[1];
    const c = images[2];
    images[0] = b;
    images[1] = c;
    images[2] = a;
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const prevSlide = () => {
    const a = images[0];
    const b = images[1];
    const c = images[2];
    images[0] = c;
    images[1] = a;
    images[2] = b;
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  return (
    <View style={styles.topdiv}>
      <ScrollView horizontal style={styles.scrollview}>
        {images.map((slide, index) => {
          return (
            <div style={styles.div1}>
              {index === 1 && <img src={slide.image} style={styles.imagediv} />}

              {index < 1 && <img src={slide.image} style={styles.imagediv2} />}

              {index > 1 && <img src={slide.image} style={styles.imagediv2} />}
            </div>
          );
        })}
      </ScrollView>
      <FaArrowAltCircleRight style={styles.rightarrow} onClick={nextSlide} />
      <FaArrowAltCircleLeft style={styles.leftarrow} onClick={prevSlide} />
    </View>
  );
};

const styles = StyleSheet.create({
  topdiv: {
    top: "30%",
    alignItems: "center"
  },
  imagediv: {
    height: 220,
    width: 220,
    marginLeft: 200,
    marginRight: 200,
    borderRadius: 15
  },
  imagediv2: {
    height: 200,
    width: 200,
    //   borderRadius: 60,
    rotateX: "15%"
  },
  imagediv3: {
    height: 200,
    width: 200
    //  borderRadius: 150
  },
  rightarrow: {
    position: "fixed",
    fontSize: "3rem",
    left: "61%",
    top: "50%",
    color: "red",
    backgroundColor: "black",
    borderRadius: 50
  },
  leftarrow: {
    position: "fixed",
    fontSize: "3rem",
    left: "35%",
    top: "50%",
    color: "red",
    backgroundColor: "black",
    borderRadius: 50
  }
});

export default ImageSlider;
