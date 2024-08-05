const faqs = [
  {
    question: "What are the requirements for HPP food?",
    answer:
      "High Pressure Processing (HPP) uses water compression to transmit pressure. Foods with a water activity (aw) above 0.96 are ideal for this process, as the high water activity ensures more effective microbial inactivation and extended shelf life. \n\nIn simpler terms, HPP works better on products with high water activity because they have more free water to transmit pressure, leading to better results in killing microorganisms.",
  },
  {
    question: "What foods cannot be processed by HPP?",
    answer:
      "To maximize the benefits of HPP, products should have high water activity. HPP is not suitable for spices, powders, dry nuts, whole fruits, leafy vegetables, bread, and similar items because it can alter their texture without a liquid or dressing.\n\nHPP also requires foods to be thawed, as it doesn’t work on frozen items. Frozen foods don’t compress well and can protect microorganisms, making them less effective.",
  },
  {
    question:
      "Does HPP affect the composition of foods or their sensorial properties?",
    answer:
      "HPP minimally affects vitamins, antioxidants, and flavor compounds, retaining them better than traditional thermal methods. It preserves these nutrients because it targets only weaker non-covalent interactions, like hydrogen bonds and van der Waals forces, without breaking covalent bonds.",
  },
  {
    question:
      "What are the advantages of HPP over other non-thermal technologies?",
    answer:
      "HPP is the most widely used non-thermal food processing technology in the USA, Europe, Asia, and Oceania. Unlike other non-thermal methods, HPP uses no heat and works for both liquid and solid foods. It also helps remove additives and create clean-label products.",
  },
  {
    question: "Do foods need to be packaged for HPP?",
    answer:
      'HPP is an "in-pack" process, meaning products need to be packaged during processing, usually in their final packaging. The packaging must be flexible, elastic, and waterproof. Plastic polymers are commonly used for this.\n\nHiperbaric’s "In-Bulk" technology is a new innovation that allows processing liquids in bulk before packaging. This enables the use of various packaging options like carton bricks, glass bottles, and metal cans.',
  },
  {
    question: "Is HPP really a non-thermal process?",
    answer:
      "HPP is a non-thermal process, keeping temperatures below 40°C (100°F). However, there is a slight temperature increase inside the vessel due to adiabatic heating from water compression. For every 100 MPa (1,000 bar or 15,000 psi) of pressure, the temperature rises by about 2-3°C. At the maximum pressure of 600 MPa (6,000 bar or 87,000 psi), the temperature increase is around 18°C (64°F) during processing, which lasts 2-6 minutes. This temperature rise is reversible, and the product returns to its original temperature once the pressure is released.",
  },
  {
    question: "Can HPP replace heat pasteurization or sterilization?",
    answer:
      "HPP technology kills most microorganisms, parasites, and viruses by applying pressures from 400 MPa (4,000 bar or 58,000 psi) to 600 MPa (6,000 bar or 87,000 psi) for a few seconds to about 6 minutes. However, some pressure-resistant microorganisms and bacterial spores can survive, and most enzymes are not completely inactivated. Thus, HPP does not create shelf-stable foods at room temperature. Nevertheless, HPP-treated products retain their fresh-like taste and nutritional value better than those processed with heat.\n\nIn summary, while HPP provides similar microbiological safety to heat pasteurization, it is not a sterilization method.",
  },
  {
    question: "Can HPP inactivate spore-forming microorganisms?",
    answer:
      "Bacterial spores are very resistant to high pressure and aren't inactivated even at the maximum pressure of 600 MPa (6,000 bar or 87,000 psi). However, using low pH (<4.6) and refrigeration (4-6°C) can help keep spores from growing and ensure safety during storage. Combining high pressure with mild or high temperatures in processes like Pressure Assisted Thermal Sterilization (PATS) or Pressure Assisted Thermal Processing (PATP) can help kill spores while preserving the product's nutritional and sensory qualities. However, this technology is not yet widely used in industry.",
  },
  {
    question: "Does HPP impact enzyme activity?",
    answer:
      "HPP kills harmful microorganisms and some tissue enzymes, but its effect on enzymes varies depending on the type, processing conditions, and food characteristics. Most enzymes are only partly inactivated and can remain active during refrigeration. To enhance enzyme inactivation, HPP can be combined with other methods like lowering pH, adding antioxidants, or blanching before HPP. Sometimes, partial enzyme inactivation can be beneficial, allowing for the creation of new products with different textures.",
  },
  {
    question: "Can HPP foods be stored at room temperature?",
    answer:
      "It's best to store HPP products in refrigeration (4-6°C) to slow microbial growth, enzyme activity, and chemical reactions during their shelf life. Some microorganisms and partially inactivated enzymes can recover over time, so keeping products cold helps minimize their activity. Additionally, chemical reactions that affect taste or nutrition happen faster at higher temperatures, making refrigeration crucial for maintaining quality.",
  },
  {
    question: "Does HPP guarantee food safety?",
    answer:
      "Yes, HPP ensures food safety, extends shelf life, and keeps products fresh. It is widely recognized by food safety authorities like the FDA and EFSA. HPP works by applying pressures from 400 MPa (4,000 bar) to 600 MPa (6,000 bar) for a few seconds to about 6 minutes to inactivate most harmful microorganisms, including bacteria, viruses, molds, yeasts, and parasites.\n\nHowever, some microorganisms and spores are resistant to high pressure, so additional measures are needed. Combining HPP with low pH (<4.6), natural antimicrobials, and refrigeration (4-6°C) can further enhance food safety.",
  },
];

export default faqs;
