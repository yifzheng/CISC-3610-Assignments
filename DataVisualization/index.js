window.onload = () => {
    const pieCtx = document.getElementById("doughnut-chart").getContext("2d");
    const doughnutChart = new Chart(pieCtx, {
        type: "doughnut",
        data: {
            labels: [
                "12/27/2015",
                "12/20/2015",
                "12/13/2015",
                "12/6/2015",
                "11/29/2015",
                "11/22/2015",
                "11/15/2015",
                "11/8/2015",
                "11/1/2015",
                "10/25/2015",
            ],
            datasets: [
                {
                    label: "Total Avovados",
                    backgroundColor: [
                        "#3e95cd",
                        "#8e5ea2",
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850",
                        "#3e95ff",
                        "#ff5ea2",
                        "#3cff9f",
                        "#00c3b9",
                        "#c45ff0",
                    ],
                    data: [
                        64236.62, 54876.98, 118220.22, 78992.15, 51039.6,
                        55979.78, 83453.76, 109428.33, 99811.42, 74338.76,
                    ],
                },
            ],
        },
        options: {
            title: {
                display: true,
                text: "Total Avocados Sold By Date (10/25/2015 - 12/27/2015: Yifeng Zheng",
            },
        },
    });

    const barCtx = document
        .getElementById("bar-chart-horizontal")
        .getContext("2d");

    const barChart = new Chart(barCtx, {
        type: "horizontalBar",
        data: {
            labels: [
                "Garena Free Fire- World Series",
                "PUBG MOBILE - Traverse",
                "Mobile Legends: Bang Bang",
                "Brawl Stars",
                "Sniper 3D: Fun Free Online FPS Shooting Game",
                "Call of Duty®: Mobile - Season 4: Spurned & Burned",
                "Among Us",
                "Temple Run 2",
                "PUBG MOBILE LITE",
                "Gangstar Vegas: World of Crime",
            ],
            datasets: [
                {
                    label: "Google Play Store: Total Ratings ~ Yifeng Zheng",
                    backgroundColor: [
                        "#3e95cd",
                        "#8e5ea2",
                        "#3cba9f",
                        "#e8c3b9",
                        "#c45850",
                        "#3e95ff",
                        "#ff5ea2",
                        "#3cff9f",
                        "#00c3b9",
                        "#c45ff0",
                    ],
                    data: [
                        86273129, 37276732, 26663595, 17971552, 14464235,
                        13572148, 11936964, 9633929, 7578630, 6268377,
                    ],
                },
            ],
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Top Games on Google Play Store Based on Total Ratings",
            },
        },
    });
};
