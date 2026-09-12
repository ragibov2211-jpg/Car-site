const cars = {

    skyline: {
        title: "Nissan Skyline",
        engine: "2.6 л, рядный 6-цилиндровый",
        power: "280 л.с.",
        speed: "250 км/ч",
        description:
            "Легендарный японский спортивный автомобиль Nissan Skyline. Известен своим мощным двигателем, отличной управляемостью и огромной популярностью среди любителей JDM."
    },

    bmw: {
        title: "BMW M4",
        engine: "3.0 л, рядный 6-цилиндровый Twin-Turbo",
        power: "510 л.с.",
        speed: "250 км/ч",
        description:
            "Современное спортивное купе BMW M4. Сочетает высокую мощность, агрессивный дизайн и отличную управляемость."
    },

    supra: {
        title: "Toyota Supra",
        engine: "3.0 л, рядный 6-цилиндровый Turbo",
        power: "387 л.с.",
        speed: "250 км/ч",
        description:
            "Легендарная Toyota Supra — один из самых известных японских спортивных автомобилей. Отличается задним приводом и отличными возможностями для тюнинга."
    },

    gtr: {
        title: "Nissan GT-R",
        engine: "3.8 л, V6 Twin-Turbo",
        power: "565 л.с.",
        speed: "315 км/ч",
        description:
            "Nissan GT-R, известный как Godzilla, — легендарный японский спорткар с полным приводом и невероятным ускорением."
    },

    amg: {
        title: "Mercedes-AMG GT",
        engine: "4.0 л, V8 Twin-Turbo",
        power: "577 л.с.",
        speed: "315 км/ч",
        description:
            "Мощный немецкий спорткар Mercedes-AMG GT. Сочетает роскошный интерьер, агрессивный дизайн и огромную мощность."
    },

    r8: {
        title: "Audi R8",
        engine: "5.2 л, атмосферный V10",
        power: "602 л.с.",
        speed: "331 км/ч",
        description:
            "Audi R8 — знаменитый немецкий суперкар с атмосферным двигателем V10, полным приводом и впечатляющей динамикой."
    }
};


function showCar(carName) {

    const car = cars[carName];

    if (!car) {
        return;
    }

    document.getElementById("modalTitle").textContent = car.title;

    document.getElementById("modalText").innerHTML = `
        <div class="car-details">

            <p>
                <strong>🔧 Двигатель:</strong><br>
                ${car.engine}
            </p>

            <p>
                <strong>🏎️ Мощность:</strong><br>
                ${car.power}
            </p>

            <p>
                <strong>⚡ Максимальная скорость:</strong><br>
                ${car.speed}
            </p>

            <p>
                <strong>📖 Описание:</strong><br>
                ${car.description}
            </p>

        </div>
    `;

    document.getElementById("carModal").style.display = "flex";
}


function closeModal() {
    document.getElementById("carModal").style.display = "none";
}


window.onclick = function(event) {

    const modal = document.getElementById("carModal");

    if (event.target === modal) {
        closeModal();
    }

};