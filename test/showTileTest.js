import React from "react";
import { renderIntoDocument, findRenderedDOMComponentWithTag, findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import ShowTile from "../src/components/showTile";
import { expect } from "chai";

describe("ShowTile", () => {
    const fma = {
        id: 1,
        name: "Fullmetal Alchemist",
        description: "The rules of alchemy state that to gain something, one must lose something of equal value. Alchemy is the process of taking apart and reconstructing an object into a different entity, with the rules of alchemy to govern this procedure. However, there exists an object that can bring any alchemist above these rules, the object known as the Philosopher's Stone. The young Edward Elric is a particularly talented alchemist who through an accident years back lost his younger brother Alphonse and one of his legs. Sacrificing one of his arms as well, he used alchemy to bind his brother's soul to a suit of armor. This lead to the beginning of their journey to restore their bodies, in search for the legendary Philosopher's Stone.",
        image: "fullmetal-alchemist.jpg"
    };

    describe("render", () => {
      it("should display the show's name and image", () => {
        const component = renderIntoDocument(
        <ShowTile show={fma} />
        );

        const name = findRenderedDOMComponentWithTag(component, "div");
        const image = findRenderedDOMComponentWithTag(component, "img");

        expect(name.innerHTML).to.eq(fma.name);
        expect(image.getAttribute("src")).to.include(fma.image);
      });
    });
});
