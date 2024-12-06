document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("inventory-form");
    const category = document.getElementById("category");
    const subcategory = document.getElementById("subcategory");
    const itemsList = document.getElementById("items");

    // Subcategorías según la categoría seleccionada
    const subcategories = {
        galax: ["Hombre", "Mujer", "Niño", "Bebé"],
        punto_blanco: ["Hombre", "Mujer"],
        gef: ["Hombre", "Mujer"],
    };

    // Cambiar las opciones de subcategoría cuando cambie la categoría
    category.addEventListener("change", () => {
        const selectedCategory = category.value;
        subcategory.innerHTML = ""; // Limpiar opciones anteriores

        if (subcategories[selectedCategory]) {
            subcategories[selectedCategory].forEach((subcat) => {
                const option = document.createElement("option");
                option.value = subcat.toLowerCase();
                option.textContent = subcat;
                subcategory.appendChild(option);
            });
        } else {
            const defaultOption = document.createElement("option");
            defaultOption.value = "";
            defaultOption.textContent = "Seleccione una categoría primero";
            subcategory.appendChild(defaultOption);
        }
    });

    // Agregar un elemento al inventario
    document.getElementById("add-item").addEventListener("click", () => {
        const name = document.getElementById("name").value;
        const status = document.getElementById("status").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        const categoryValue = category.options[category.selectedIndex].text;
        const subcategoryValue = subcategory.options[subcategory.selectedIndex]?.text || "N/A";

        // Validación básica
        if (!name || !price || !description) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        // Crear elemento de inventario
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${name}</strong> - ${categoryValue} (${subcategoryValue})<br>
            Estado: ${status}<br>
            Precio: $${parseFloat(price).toFixed(2)}<br>
            Descripción: ${description}
        `;
        itemsList.appendChild(listItem);

        // Resetear el formulario
        form.reset();
        subcategory.innerHTML = "<option value=''>Seleccione una categoría primero</option>";
    });
});
