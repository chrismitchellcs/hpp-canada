import React from "react";

const packaging = [
  {
    name: "Bottles",
    image: "bottles.jpg",
    description: (
      <ul style={{}}>
        <li style={{ marginBottom: "1em" }}>
          PET is the most suitable material for bottles, whereas HDPE is
          preferred for caps. Blow-molded bottles perform better with HPP.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Rounded corners provide shoulder rigidity and less strain when
          compared to pointy/edgy corners.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Crown-shaped base provides rigidity and structural support for
          carbonated drinks.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Caps with inner plug/embossment are preferred as the inner lip
          prevents fluid exchange during high pressure.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Liner seals in the cap are not desired as they may lead to leakage if
          cap and liner materials compress at different rates.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Foil closures must be validated. The cap should be placed after HPP to
          avoid mechanical stress from air trapped in void space.
        </li>
        <li style={{ marginBottom: "1em" }}>
          Dispenser caps can be used if the bottle opening is covered with a
          suitable foil closure and the cap is placed after HPP.
        </li>
        <li style={{ marginBottom: "0" }}>
          Minimizing the headspace reduces undesired chemical/enzymatic
          reactions and prevents bottle wall collapse (paneling).
        </li>
      </ul>
    ),

    color1: "#F9D7D7",
    color2: "#F4B0AF",
  },
  {
    name: "Flexible Pouches & Bags",
    image: "pouches.png",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          Flexible, sealed polymer-based packages that can be used for liquid,
          paste, or solid products.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Used for retail and food-service/processor packs.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Depending on channel, decoration ranges from sophisticated printed
          structures to post-applied labels.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Soft drinks, bottled waters, wines, spirits, and specialized
          nutritionally enhanced beverages are also packaged in flexible
          packaging.
        </li>
      </ul>
    ),
    color1: "#CFE2F5",
    color2: "#A2C7EC",
  },
  {
    name: "Trays",
    image: "tray.jpg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          Semi-rigid, sealed polymer container capable of use for solid foods or
          ready meal components.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Consumers either consume directly from the container or remove
          individual items for use in recipes or placement on a serving dish.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Typically labeled or decorated on flat lid film surface unless
          secondary pack contains the tray.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Can also be vacuum skin packed with drawn film covering product placed
          in tray.
        </li>
      </ul>
    ),
    color1: "#FEE2CC",
    color2: "#FCC59A",
  },
  {
    name: "Flexible Packaging",
    image: "flexible.jpg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          Vacuum-packed and modified atmosphere packaging (MAP).
        </li>
        <li style={{ marginBottom: "10px" }}>
          A lot of meat products are packaged in flexible vacuum packed
          packaging.
        </li>
      </ul>
    ),
    color1: "#E7F2DA",
    color2: "#CEE4B5",
  },
  {
    name: "Tubs",
    image: "tubs.jpg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          Semi-rigid, sealed polymer container capable of use for paste,
          solid/sauce mixtures or liquid products.
        </li>
        <li>
          Typically labeled or decorated on sidewalls as well as on snap fit
          lids that cover film seals.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>PET</strong> - clear or pigmented containers.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>HDPE</strong> - translucent to opaque containers.
        </li>
        <li style={{ marginBottom: "10px" }}>
          <strong>PP</strong> - good contact clarity containers.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Co-extruded structures can include EVOH or nylon for enhanced oxygen
          barrier; barrier lid films should be used in conjunction for high
          total package barrier.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Majority of containers are thermoformed, but injection molded versions
          also possible, and make incorporation of in-mold labeling (IML)
          technology for integral sidewall labels.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Injection molding also permits greater control over container
          thickness profiles and can achieve higher height to width ratios with
          good thickness profile control.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Lid films range from oriented films with peel-seal layers to complex
          and heavy weight coextruded films.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Snap fit lids or over caps are generally PET or PP, although PE
          versions can be used; they typically are monolayer, do not provide
          barrier and are labeled or decorated; they can be clear or opaque
          depending on the appearance of the product or marketing
          considerations.
        </li>
        <li>Heat sealed lids.</li>
        <li style={{ marginBottom: "10px" }}>
          Can be gas flushed to limit oxygen in headspace and extend shelf life.
        </li>
      </ul>
    ),
    color1: "#FEFAD6",
    color2: "#FBF3AF",
  },
  {
    name: "Bulk Bags",
    image: "bulk.jpg",
    description: (
      <ul>
        <li style={{ marginBottom: "10px" }}>
          Bag-In-Box is a flexible package ideal for both chemical and food
          applications ranging in size from 1L to 25L.
        </li>
        <li style={{ marginBottom: "10px" }}>
          CDF offers both form fit and pillow styles to meet all flexible
          packaging requirements.
        </li>
        <li style={{ marginBottom: "10px" }}>
          Benefits of bulk bags include significant cost savings in logistics
          and storage costs using at least 80% less plastic than rigid
          containers and 50% fewer CO2 emissions during transport than
          competitive rigid packaging.
        </li>
      </ul>
    ),
    color1: "#E0D1EA",
    color2: "#C4A5D6",
  },
];

export default packaging;
