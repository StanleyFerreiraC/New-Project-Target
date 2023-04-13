let faturamento_sp = 67836.43;
      let faturamento_rj = 36678.66;
      let faturamento_mg = 29229.88;
      let faturamento_es = 27165.48;
      let faturamento_outros = 19849.53;

      let valor_total =
        faturamento_sp +
        faturamento_rj +
        faturamento_mg +
        faturamento_es +
        faturamento_outros;

      let percentual_sp = (faturamento_sp / valor_total) * 100;
      let percentual_rj = (faturamento_rj / valor_total) * 100;
      let percentual_mg = (faturamento_mg / valor_total) * 100;
      let percentual_es = (faturamento_es / valor_total) * 100;
      let percentual_outros = (faturamento_outros / valor_total) * 100;

      document.getElementById("sp").textContent =
        percentual_sp.toFixed(2) + "%";
      document.getElementById("rj").textContent =
        percentual_rj.toFixed(2) + "%";
      document.getElementById("mg").textContent =
        percentual_mg.toFixed(2) + "%";
      document.getElementById("es").textContent =
        percentual_es.toFixed(2) + "%";
      document.getElementById("outros").textContent =
        percentual_outros.toFixed(2) + "%";
      document.getElementById("total").textContent = valor_total.toFixed(2);