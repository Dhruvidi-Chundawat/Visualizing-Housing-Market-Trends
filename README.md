# 🏠 Visualizing Housing Market Trends

> An interactive housing market analytics platform for **ABC Company** — built with Tableau, Python (Flask), JavaScript, and CSS.

---

## 📌 Project Overview

This project analyzes comprehensive housing market data to uncover key insights into house pricing, renovation impact, and property feature distributions. Interactive Tableau dashboards are embedded in a custom web application, giving stakeholders a powerful tool for data-driven decision-making.

**Key business questions answered:**
- How do renovations affect house prices and total sales?
- What is the age distribution of the current housing inventory?
- How do bedrooms, bathrooms, and floors vary across different house age groups?
- What are the overall market-level KPIs (average price, total area, record count)?

---

## 🗂️ Repository Structure

Visualizing-Housing-Market-Trends/
│
├── backend/              # Python / Flask server
│   ├── app.py            # Main Flask application & routes
│   └── requirements.txt  # Python dependencies
│
├── frontend/             # Client-side application
│   ├── index.html        # Main HTML entry point
│   ├── static/
│   │   ├── css/          # Stylesheets (54.7% of codebase)
│   │   └── js/           # JavaScript modules (40.9% of codebase)
│   └── templates/        # Jinja2 HTML templates
│
└── .gitignore

## 📊 Visualizations

Four core Tableau scenarios are included in the workbook:

| # | Scenario | Chart Type | Description |
|---|----------|------------|-------------|
| 1 | Overall Data Overview | KPI Summary Cards | Count of records, average sales price, total basement area |
| 2 | Total Sales by Years Since Renovation | Histogram | Sales price distribution vs. renovation recency |
| 3 | House Age by Renovation Status | Pie Chart | Proportion of renovated vs. non-renovated homes by age group |
| 4 | House Age by Bedrooms, Bathrooms & Floors | Grouped Bar Chart | Feature distribution across different house age categories |


## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Data Visualization | Tableau Desktop / Tableau Public |
| Backend | Python 3.x, Flask |
| Frontend Scripting | JavaScript (ES6+) |
| Frontend Styling | CSS3 |
| Markup | HTML5 |
| Data Source | CSV (Transformed Housing Data) |
| Version Control | Git / GitHub |


## ⚙️ Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- A modern web browser
- Tableau Public account *(for viewing/editing the workbook)*


## 📁 Data

The project uses a pre-processed housing dataset (`Transformed_Housing_Data2.csv`) containing cleaned and transformed housing market records. Key fields include:

- Sale price and sale date
- Year built and year renovated
- Number of bedrooms, bathrooms, and floors
- Square footage (living area and basement)
- Calculated fields: house age, years since renovation
- 

## 🌐 Tableau Dashboard

The Tableau workbook (`House_Analytics.twbx`) contains all visualizations, dashboards, and the storyboard. Dashboards are published to **Tableau Public** and embedded in the web application via JavaScript embed code.

To open the workbook locally, you will need **Tableau Desktop** or **Tableau Public Desktop**.


## 📂 Language Breakdown

CSS          54.7%   ████████████████████░░░░░░░░░░
JavaScript   40.9%   ███████████████░░░░░░░░░░░░░░░
Python        2.9%   █░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
HTML          1.5%   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░


## 👥 Stakeholders

| Role | Usage |
|------|-------|
| Real Estate Analysts | Identifying pricing patterns and renovation impact |
| Marketing Teams | Targeting buyer segments based on housing trends |
| Company Executives | Strategic decisions using high-level market KPIs |




*Built with Tableau · Flask · JavaScript · CSS*
