<script>
  function mettreAJourTotal() {
    const lignes = document.querySelectorAll(".panier-table tbody tr");
    let total = 0;

    lignes.forEach((ligne) => {
      const prix = parseFloat(ligne.children[1].textContent.replace("€", "").trim());
      const quantite = parseInt(ligne.querySelector('input[type="number"]').value);
      const totalLigne = prix * quantite;
      ligne.children[3].textContent = totalLigne.toFixed(2) + " €";
      total += totalLigne;
    });

    document.querySelector(".total-panier").innerHTML = `<strong>Total :</strong> ${total.toFixed(2)} €`;
  }

  // Écouteurs d'événement pour les champs de quantité
  document.querySelectorAll('.panier-table input[type="number"]').forEach((input) => {
    input.addEventListener("change", mettreAJourTotal);
  });

  // Écouteurs pour supprimer une ligne
  document.querySelectorAll(".btn-remove").forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest("tr").remove();
      mettreAJourTotal();
    });
  });

  // Initialiser au chargement
  window.addEventListener("load", mettreAJourTotal);
</script>
