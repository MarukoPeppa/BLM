document.addEventListener("DOMContentLoaded", () => {
  const blrecordTypes = {
    BL00: "BL00 - Administration Record",
    BL10: "BL10 - Header Record",
    BL20: "BL20 - Reference Record",
    BL30: "BL30 - Transport Header Record",
    BL31: "BL31 - Transport Dates Record",
    BL32: "BL32 - Transport Location Record",
    BL40: "BL40 - Address Record (unstructured)",
    BL41: "BL41 - Address Record (structured)",
    BL42: "BL42 - Communication Contact Record",
    BL50: "BL50 - Goods Description Record",
    BL51: "BL51 - Handling Instruction Record",
    BL52: "BL52 - Temperature Range and/or Setting Record",
    BL53: "BL53 - Additional Product ID Record",
    BL54: "BL54 - Dimensions Record",
    BL55: "BL55 - Split Goods Placement Record",
    BL57: "BL57 - Split Goods Placement Record",
    BL58: "BL58 - Dangerous Goods Additional Information Record",
    BL59: "BL59 - Dangerous Goods Communication Contact Record",
    BL60: "BL60 - Dangerous Goods Physical Measurement Record",
    BL61: "BL61 - Dangerous Goods Placement Record",
    BL70: "BL70 - Package Record",
    BL75: "BL75 - Unit of Equipment Record",
    BL77: "BL77 - Equipment Address Record",
    BL80: "BL80 - Terms of Delivery Record",
    BL85: "BL85 - Transport Charges / Rate Record",
    BL87: "BL87 - Monetary Qualifier Record",
    BL90: "BL90 - Remarks Record",
  };

  const awrecordTypes = {
    AW00: "AW00 - Administration Distribution Record",
    AW10: "AW10 - Header Record",
    AW20: "AW20 - Declared Values Record",
    AW25: "AW25 - Charges Record",
    AW30: "AW30 - Reference Record",
    AW35: "AW35 - Accounting Record",
    AW40: "AW40 - Routing and Destination Record",
    AW41: "AW41 - Routing and Destination Record",
    AW45: "AW45 - Calculation of Other Charges Record",
    AW50: "AW50 - Address Record (Unstructured) ",
    AW51: "AW51 - Address Record (Structured) ",
    AW55: "AW55 - Communication Contact Record",
    AW60: "AW60 - Agent Record",
    AW70: "AW70 - Goods Description and Rate Calculation Record ",
    AW75: "AW75 - Measurements Record ",
    AW76: "AW76 - Dimension Record ",
    AW95: "AW95 - Total Weight Record ",
  };

  const tabsContainer = document.getElementById("tabs");
  const tabContentsContainer = document.getElementById("tab-contents");
  const transformButton = document.getElementById("transformButton");
  const flatfileInput = document.getElementById("inputTextArea");
  const inputContent = flatfileInput.value;

  // Function to create tabs and tables

  // Function to transform flat file content
  const transformFlatFile = () => {
    console.log("Transform button clicked");
    const flatfileContent = flatfileInput.value;

    let fileType = determineFileType(flatfileContent);
    console.log(fileType);
    let fileStructures = fileType === "BL" ? blStructures : awStructures;
    let recordTypes = fileType === "BL" ? blrecordTypes : awrecordTypes;

    const createTabsAndTables = () => {
      tabsContainer.innerHTML = "";
      tabContentsContainer.innerHTML = "";

      Object.keys(fileStructures).forEach((key, index) => {
        // Create tab
        const tab = document.createElement("div");
        tab.className = "tab";
        tab.textContent = recordTypes[key] || key; // Use record type description if available
        tab.dataset.tab = key;
        tabsContainer.appendChild(tab);

        // Create tab content
        const tabContent = document.createElement("div");
        tabContent.className = "tab-content";
        tabContent.id = `content-${key}`;
        tabContentsContainer.appendChild(tabContent);

        // Create table
        const table = document.createElement("table");
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        tabContent.appendChild(table);
      });
    };

    // Initial setup
    createTabsAndTables();

    function determineFileType(text) {
      if (text.includes("BL00")) {
        return "BL";
      } else if (text.includes("AW00")) {
        return "AW";
      } else {
        return "Unknown";
      }
    }
    const lines = flatfileContent.split("\n");
    console.log("Lines:", lines);

    // Clear previous data
    document
      .querySelectorAll(".tab-content tbody")
      .forEach((tbody) => (tbody.innerHTML = ""));

    const data = {};

    lines.forEach((line) => {
      const recordType = line.substring(0, 4);
      console.log("Processing record type:", recordType);
      const structure = fileStructures[recordType];
      if (structure) {
        if (!data[recordType]) {
          data[recordType] = [];
        }
        const rowData = [];
        structure.forEach((field) => {
          rowData.push(line.substring(field.start - 1, field.end).trim());
        });
        data[recordType].push(rowData);
      }
    });

    Object.keys(data).forEach((recordType) => {
      const tableBody = document.querySelector(`#content-${recordType} tbody`);
      const structure = fileStructures[recordType];

      // Transpose data
      for (let i = 0; i < structure.length; i++) {
        const row = document.createElement("tr");
        const th = document.createElement("th");
        th.textContent = structure[i].name;
        row.appendChild(th);

        data[recordType].forEach((record) => {
          const td = document.createElement("td");
          td.textContent = record[i];
          row.appendChild(td);
        });

        tableBody.appendChild(row);
      }
    });

    // Disable tabs with no data
    document.querySelectorAll(".tab").forEach((tab) => {
      const tabContent = document.getElementById(`content-${tab.dataset.tab}`);
      const tableBody = tabContent.querySelector("tbody");
      if (tableBody.children.length === 0) {
        tab.classList.add("disabled");
        tab.classList.remove("active");
        tabContent.classList.remove("active");
      } else {
        tab.classList.remove("disabled");
      }
    });
  };

  // Tab click event
  tabsContainer.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("tab") &&
      !event.target.classList.contains("disabled")
    ) {
      const tabContent = document.getElementById(
        `content-${event.target.dataset.tab}`
      );
      event.target.classList.toggle("active");
      tabContent.classList.toggle("active");
    }
  });

  // Transform button click event
  transformButton.addEventListener("click", transformFlatFile);
});
