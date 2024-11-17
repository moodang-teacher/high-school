function openTab(event, tabId) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-button");

    tabs.forEach((tab) => tab.classList.remove("active"));
    buttons.forEach((button) => button.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// 차트 데이터를 설정합니다.
const ctx1 = document.getElementById("chart1").getContext("2d");
const chart1 = new Chart(ctx1, {
    type: "bar",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "매출액 (단위: 십억원)",
                data: [155.4, 144.4, 193.9, 345.9, 566.5],
                backgroundColor: "rgba(0, 184, 235, 1)",
                borderColor: "rgba(0, 184, 235, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        maintainAspectRatio: false, // 비율 고정 해제
        scales: {
            x: {
                grid: {
                    display: false, // X축만 표시
                    drawBorder: true,
                },
            },
            y: {
                grid: {
                    display: true, // Y축의 선을 제거
                    drawBorder: false,
                },
                beginAtZero: true,
            },
        },
    },
});

const ctx2 = document.getElementById("chart2").getContext("2d");
const chart2 = new Chart(ctx2, {
    type: "bar",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "영업이익 (단위: 십억원)",
                data: [43.5, 44.1, 57.9, 96.6, 169.4],
                backgroundColor: "rgba(75, 137, 223, 1)",
                borderColor: "rgba(75, 137, 223, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        maintainAspectRatio: false, // 비율 고정 해제
        scales: {
            x: {
                grid: {
                    display: false, // X축만 표시
                    drawBorder: true,
                },
            },
            y: {
                grid: {
                    display: true, // Y축의 선을 제거
                    drawBorder: false,
                },
                beginAtZero: true,
            },
        },
    },
});

const ctx3 = document.getElementById("chart3").getContext("2d");
const chart3 = new Chart(ctx3, {
    type: "bar",
    data: {
        labels: ["2019", "2020", "2021", "2022", "2023"],
        datasets: [
            {
                label: "당기순이익 (단위: 십억원)",
                data: [31.2, 29.6, 67.5, 67.5, 105.0],
                backgroundColor: "rgba(0, 104, 174, 1)",
                borderColor: "rgba(0, 104, 174, 1)",
                borderWidth: 1,
            },
        ],
    },
    options: {
        maintainAspectRatio: false, // 비율 고정 해제
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: true,
                },
            },
            y: {
                grid: {
                    display: true,
                    drawBorder: false,
                },
                beginAtZero: true,
            },
        },
    },
});
