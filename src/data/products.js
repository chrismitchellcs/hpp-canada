import React from "react";

const products = [
  {
    name: "Citrus Juice",
    description: (
      <ul>
        <li>
          Freshly squeezed Mandarin, Lemon, Lime, Orange, and Grapefruit juices
        </li>
        <li>
          Preservative-free, High-Pressure Processed (HPP) for freshness and
          quality
        </li>
        <li>
          Available in:
          <ul>
            <li>20L bulk bags</li>
            <li>5L bag-in-box</li>
            <li>1L, 370ml, and 300ml bottles</li>
          </ul>
        </li>
        <li>Perfect for food service, retail, or personal use</li>
      </ul>
    ),
    image: "orange juice.jpg",
  },
  {
    name: "Blueberry & Cranberry Juice",
    description: (
      <ul>
        <li>Freshly squeezed Blueberry and Cranberry juices</li>
        <li>
          Preservative-free, High-Pressure Processed (HPP) for freshness and
          quality
        </li>
        <li>
          Available in:
          <ul>
            <li>20L bulk bags</li>
            <li>5L bag-in-box</li>
            <li>1L, 370ml, and 300ml bottles</li>
          </ul>
        </li>
        <li>Perfect for food service, retail, or personal use</li>
      </ul>
    ),
    image: "blueberry.jpg",
  },

  {
    name: "Protein Drinks",
    description: (
      <ul>
        <li>Nutrient-rich Protein Drinks</li>
        <li>High-quality ingredients with no preservatives</li>
        <li>
          Available in:
          <ul>
            <li>20L bulk bags</li>
            <li>5L bag-in-box</li>
            <li>1L, 370ml, and 300ml bottles</li>
          </ul>
        </li>
        <li>Perfect for fitness, retail, or personal use</li>
      </ul>
    ),
    image: "protein.jpg",
  },
  {
    name: "Cold Brew Coffee",
    description: (
      <ul>
        <li>Premium Cold Brew Coffee</li>
        <li>Smooth, bold flavor with no preservatives</li>
        <li>
          Available in:
          <ul>
            <li>20L bulk bags</li>
            <li>5L bag-in-box</li>
            <li>1L, 370ml, and 300ml bottles</li>
          </ul>
        </li>
        <li>Perfect for cafés, retail, or personal use</li>
      </ul>
    ),
    image: "coffee.jpg",
  },
  {
    name: "Vegan Meats",
    description: (
      <ul>
        <li>Delicious and nutritious Vegan Meats</li>
        <li>Made from high-quality plant-based ingredients</li>
        <li>
          Available in flavors:
          <ul>
            <li>Original (Beef flavor)</li>
            <li>Curry (Indian)</li>
            <li>Spicy (Mexican)</li>
            <li>Tomato and Herbs (Italian)</li>
          </ul>
        </li>
        <li>Perfect for restaurants, retail, or home cooking</li>
      </ul>
    ),
    image: "vegan-meat.jpeg",
  },
  {
    name: "And More...",
    description:
      "We are always working on new products, if you want to work with us let us know!",
    image: "forest.jpg",
  },
];

export default products;
