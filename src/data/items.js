import React from "react";

const items = [
  {
    name: "Meat Products",
    icon: "steak.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Enhances Food Safety:</strong> HPP technology eliminates
          pathogenic microorganisms, achieving a 3-log reduction or more,
          without altering food properties.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Premium Quality with Extended Shelf Life:</strong>{" "}
          Inactivation of spoilage microorganisms significantly increases shelf
          life while maintaining high sensorial quality.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> HPP allows for formulations free of
          preservatives and additives, meeting the demand for clean labels and
          reduced sodium.
        </li>
      </ul>
    ),

    color1: "#F9D7D7",
    color2: "#F4B0AF",
  },
  {
    name: "Seafood Products",
    icon: "fish.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Shucking of Mollusks:</strong> Pressures between 2,000 – 3,500
          bar easily open bivalve shells, allowing efficient meat extraction
          without thermal effects.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Crustacean Meat Extraction:</strong> HPP separates lobster and
          crab meat from shells, yielding 100% meat extraction while preserving
          color, texture, and flavor.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Prevents Cross Contamination:</strong> Avoids manual handling,
          reducing cost, time, and contamination risk.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> HPP inactivates parasites and
          microorganisms like Anisakis, Vibrio sp., and Norovirus, enhancing
          seafood safety.
        </li>
      </ul>
    ),
    color1: "#CFE2F5",
    color2: "#A2C7EC",
  },
  {
    name: "Juices & Beverages",
    icon: "juice.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Fresh-like, Premium Beverages:</strong> HPP preserves color,
          flavor, and freshness, similar to freshly squeezed juice.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> Achieves a 5-log reduction of pathogens
          in juices, meeting FDA requirements in the U.S.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Extended Shelf Life:</strong> Extends beverage shelf life from
          6 weeks to 3 months or longer, depending on the application.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> Non-thermal process without
          preservatives or additives, allowing products to be marketed as
          “cold-processed,” “non-thermally processed,” or “natural.” Products
          can also earn the High Pressure Certified® Mark.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Functional and Probiotic Beverages:</strong> Maintains
          nutritional and functional properties, including probiotic character
          and enzymatic activity.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Technology with No Packaging Limitations:</strong> New
          Hiperbaric Bulk technology allows use of glass, cardboard, or 100%
          biodegradable packaging, in addition to flexible plastic packaging.
        </li>
      </ul>
    ),
    color1: "#FEE2CC",
    color2: "#FCC59A",
  },
  {
    name: "Plant & Fruit Products",
    icon: "fruit.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Extended Shelf Life:</strong> HPP extends the shelf life of
          plant-based and fruit products by 2x – 8x, depending on the
          formulation.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> HPP inactivates foodborne pathogens and
          spoilage microorganisms like Salmonella spp., E. coli, molds, and
          yeasts, preventing recontamination by processing products in their
          final packaging.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Premium Quality:</strong> HPP maintains food properties,
          including color, flavor, and nutritional profile, since it is a
          non-thermal process.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> HPP reduces or eliminates the need for
          preservatives or additives, ensuring a clean label product.
        </li>

        <li style={{ marginBottom: "10px" }}>
          <strong>Variety of Formats:</strong> HPP supports a wide range of
          packaging formats, such as tubs, large bags, individual pouches, and
          more.
        </li>
      </ul>
    ),
    color1: "#E7F2DA",
    color2: "#CEE4B5",
  },
  {
    name: "Dairy Products",
    icon: "dairy.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> HPP inactivates foodborne pathogens and
          spoilage microorganisms like Salmonella spp., E. coli, molds, and
          yeasts.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Nutritional Value:</strong> As a cold process, HPP preserves
          vitamins, immunoglobulins, and lactoferrin.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Extended Shelf Life:</strong> HPP extends the shelf life of
          dairy products up to several months.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> Reduces or eliminates the need for
          preservatives or additives.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Product Development:</strong> Enables the creation of highly
          nutritious dairy products, applicable to milk, fresh cheeses,
          fillings, sauces, dairy spreads, and dairy beverages.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Variety of Formats:</strong> Supports a wide range of
          packaging formats, such as tubs, large bags, bottles, and more.
        </li>
      </ul>
    ),
    color1: "#FEFAD6",
    color2: "#FBF3AF",
  },
  {
    name: "Ready to Eat Meals",
    icon: "meal.svg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> Reduces or eliminates the need for
          preservatives or additives.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Premium Quality:</strong> Maintains color, flavor, and
          nutritional value through non-thermal processing.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Minimum Previous Cooking:</strong> Requires minimal cooking
          before HPP treatment to achieve optimal flavor.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Extended Shelf Life:</strong> Extends the shelf life of
          ready-to-eat products for several weeks.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> Inactivates pathogens and spoilage
          microorganisms, avoiding recontamination by processing products in
          their final packaging.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Variety of Products:</strong> Applicable to a range of
          ready-to-eat products including meat, fish, vegetables, rice, and
          pasta.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Variety of Formats:</strong> Compatible with various packaging
          formats such as tubs, large bags, trays, vacuum packs, and MAP.
        </li>
      </ul>
    ),
    color1: "#E0D1EA",
    color2: "#C4A5D6",
  },

  {
    name: "Pet Food",
    icon: "pet food.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Food Safety:</strong> HPP inactivates microorganisms like
          Salmonella spp., E. coli, or Listeria monocytogenes, ensuring pet food
          safety.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Prevents Human Contamination:</strong> HPP eliminates
          cross-contamination risks in pet food products, crucial for pet
          owners.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Premium Quality:</strong> HPP maintains the nutritional and
          sensory qualities of meat, the primary ingredient in pet food.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Clean Label:</strong> HPP enables preservative-free and
          additive-free pet food, ensuring a natural, clean label product.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Health Benefits:</strong> HPP pet food promotes cleaner teeth,
          brighter fur, and easier digestion, offering health benefits to pets.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Variety of Formats:</strong> HPP pet food can be refrigerated,
          frozen, or freeze-dried, available in various formats and packaging
          options.
        </li>
      </ul>
    ),
    color1: "#DED7D5",
    color2: "#C4B7B2",
  },
  {
    name: "Cosmetics",
    icon: "cosmetics.svg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          <strong>Natural and Organic Cosmetics:</strong> Development of
          products without chemical additives.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Maintains Color and Texture:</strong> HPP preserves emulsions
          and product color without modification.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>Inactivates Microorganisms:</strong> HPP effectively
          inactivates yeasts and vegetative bacteria, except bacterial spores.
        </li>
      </ul>
    ),
    color1: "#FCE8EF",
    color2: "#FAD1DF",
  },
];

export default items;
