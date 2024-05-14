const checkboxes = document.querySelectorAll('input[type="checkbox"][name="gender"]');

checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // Jika checkbox dipilih, nonaktifkan checkbox lainnya
            checkboxes.forEach(function(otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        }
    });
});
