let width = 1500; 
let height = 1000;
// 1 
let svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
let countRef = svg.append("g");
d3.csv("../data/video_games.csv").then(function(data) {
    data = data.sort();
    data = data.slice(0, 10);
    let xScale = d3.scaleBand()
        .domain(data.map(function(d) {return d.Name}))
        .range([0, width])
    svg.append("g")
        .call(d3.axisBottom(xScale).tickSize(0))
        .attr("transform", `translate(25, ${height / 2})`);
    let yScale = d3.scaleLinear()
        .domain([0, 175])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(yScale))
        .attr("transform", `translate(25, ${- height / 2})`);
    let bars = svg.selectAll("rect")
        .data(data)
    bars.enter()
        .append("rect")
        .merge(bars)
        .attr("fill", "blue")
        .attr("x", function(d) {return xScale(d.Name) + 125})
        .attr("y", function(d) {return yScale(d.Global_Sales)})
        .attr("width", 50)
        .attr("height", function(d) {return height - yScale(d.Global_Sales)})
        .attr("transform", `translate(-50, ${- height / 2})`)
        .on("mouseenter", function(d){
            d3.select(this).attr("opacity", 0.5)
        })
        .on("mouseleave", function(d) {
            d3.select(this).attr("opacity", 1)
        });
    let counts = countRef.selectAll("text").data(data);
        counts.enter()
        .append("text")
        .merge(counts)
        .attr("x", function(d) {return xScale(d.Name) + 75})
        .attr("y", height / 2)
        .style("text-anchor", "start")
        .text(function(d) {return d.Global_Sales});
    svg.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 25)
        .text("Top 10 Videos Games of All Time")
        .attr("transform", `translate(${width / 2}, 50)`);
    svg.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Game")
        .attr("transform", `translate(${width / 2}, ${height / 2 + 50} )`);
    svg.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Global Sales (Millions)")
        .attr("transform", `translate(75, ${height / 2 + 50})`);
});
// 2.1
d3.csv("../data/video_games.csv").then(function(data) {
    let action = 0;
    let adventure = 0;
    let fighting = 0;
    let misc = 0;
    let platform = 0;
    let puzzle = 0;
    let racing = 0;
    let roleplaying = 0;
    let shooter = 0;
    let simulation = 0;
    let sports = 0;
    data.forEach(function(d, i) {
        if (d.Genre == "Action") {
            action += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Adventure") {
            adventure += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Fighting") {
            fighting += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Misc") {
            misc += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Platform") {
            platform += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Puzzle") {
            puzzle += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Racing") {
            racing += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Role-Playing") {
            roleplaying += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Shooter") {
            shooter += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Simulation") {
            simulation += parseInt(d.NA_Sales)
        }
        if (d.Genre == "Sports") {
            sports += parseInt(d.NA_Sales)
        }
    })
    console.log("Action:", action)
    console.log("Adventure:", adventure)
    console.log("Fighting:", fighting)
    console.log("Misc:", misc)
    console.log("Platform:", platform)
    console.log("Puzzle:", puzzle)
    console.log("Racing:", racing)
    console.log("Role-Playing:", roleplaying)
    console.log("Shooter:", shooter)
    console.log("Simulation:", simulation)
    console.log("Sports:", sports)
})
let svg2 = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
d3.csv("../data/video_games2.csv").then(function(data) {
let xScale2 = d3.scaleBand()
    .domain(data.map(function(d) {return d.Genre}))
    .range([0, width])
svg2.append("g")
    .attr("transform", `translate(25, ${height / 2})`)
    .call(d3.axisBottom(xScale2).tickSize(0))
let yScale2 = d3.scaleLinear()
    .domain([0, 750])
    .range([height, 0]);
svg2.append("g")
    .call(d3.axisLeft(yScale2).ticks(10))
    .attr("transform", `translate(25, ${- height / 2})`);
let bars2 = svg2.selectAll("rect")
    .data(data)
bars2.enter()
    .append("rect")
    .merge(bars2)
    .attr("fill", "blue")
    .attr("x", function(d) {return xScale2(d.Genre) + 125})
    .attr("y", function(d) {return yScale2(d.NA_Sales)})
    .attr("width", 50)
    .attr("height", function(d) {return height - yScale2(d.NA_Sales)})
    .attr("transform", `translate(-50, ${- height / 2})`)
svg2.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 25)
        .text("NA Genre Sales")
        .attr("transform", `translate(${width / 2}, 50)`);
svg2.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Genre")
        .attr("transform", `translate(${width / 2}, ${height / 2 + 50} )`);
svg2.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("NA Sales (Millions)")
        .attr("transform", `translate(75, ${height / 2 + 50})`);
})
// 2.2
d3.csv("../data/video_games.csv").then(function(data) {
    let action = 0;
    let adventure = 0;
    let fighting = 0;
    let misc = 0;
    let platform = 0;
    let puzzle = 0;
    let racing = 0;
    let roleplaying = 0;
    let shooter = 0;
    let simulation = 0;
    let sports = 0;
    data.forEach(function(d, i) {
        if (d.Genre == "Action") {
            action += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Adventure") {
            adventure += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Fighting") {
            fighting += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Misc") {
            misc += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Platform") {
            platform += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Puzzle") {
            puzzle += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Racing") {
            racing += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Role-Playing") {
            roleplaying += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Shooter") {
            shooter += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Simulation") {
            simulation += parseInt(d.EU_Sales)
        }
        if (d.Genre == "Sports") {
            sports += parseInt(d.EU_Sales)
        }
    })
    console.log("Action:", action)
    console.log("Adventure:", adventure)
    console.log("Fighting:", fighting)
    console.log("Misc:", misc)
    console.log("Platform:", platform)
    console.log("Puzzle:", puzzle)
    console.log("Racing:", racing)
    console.log("Role-Playing:", roleplaying)
    console.log("Shooter:", shooter)
    console.log("Simulation:", simulation)
    console.log("Sports:", sports)
})
let svg3 = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
d3.csv("../data/video_games3.csv").then(function(data) {
let xScale3 = d3.scaleBand()
    .domain(data.map(function(d) {return d.Genre}))
    .range([0, width])
svg3.append("g")
    .attr("transform", `translate(25, ${height / 2})`)
    .call(d3.axisBottom(xScale3).tickSize(0))
let yScale3 = d3.scaleLinear()
    .domain([0, 500])
    .range([height, 0]);
svg3.append("g")
    .call(d3.axisLeft(yScale3).ticks(10))
    .attr("transform", `translate(25, ${- height / 2})`);
let bars3 = svg3.selectAll("rect")
    .data(data)
bars3.enter()
    .append("rect")
    .merge(bars3)
    .attr("fill", "blue")
    .attr("x", function(d) {return xScale3(d.Genre) + 125})
    .attr("y", function(d) {return yScale3(d.EU_Sales)})
    .attr("width", 50)
    .attr("height", function(d) {return height - yScale3(d.EU_Sales)})
    .attr("transform", `translate(-50, ${- height / 2})`)
svg3.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 25)
        .text("EU Genre Sales")
        .attr("transform", `translate(${width / 2}, 50)`);
svg3.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Genre")
        .attr("transform", `translate(${width / 2}, ${height / 2 + 50} )`);
svg3.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("EU Sales (Millions)")
        .attr("transform", `translate(75, ${height / 2 + 50})`);
})
// 2.3
d3.csv("../data/video_games.csv").then(function(data) {
    let action = 0;
    let adventure = 0;
    let fighting = 0;
    let misc = 0;
    let platform = 0;
    let puzzle = 0;
    let racing = 0;
    let roleplaying = 0;
    let shooter = 0;
    let simulation = 0;
    let sports = 0;
    data.forEach(function(d, i) {
        if (d.Genre == "Action") {
            action += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Adventure") {
            adventure += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Fighting") {
            fighting += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Misc") {
            misc += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Platform") {
            platform += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Puzzle") {
            puzzle += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Racing") {
            racing += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Role-Playing") {
            roleplaying += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Shooter") {
            shooter += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Simulation") {
            simulation += parseInt(d.JP_Sales)
        }
        if (d.Genre == "Sports") {
            sports += parseInt(d.JP_Sales)
        }
    })
    console.log("Action:", action)
    console.log("Adventure:", adventure)
    console.log("Fighting:", fighting)
    console.log("Misc:", misc)
    console.log("Platform:", platform)
    console.log("Puzzle:", puzzle)
    console.log("Racing:", racing)
    console.log("Role-Playing:", roleplaying)
    console.log("Shooter:", shooter)
    console.log("Simulation:", simulation)
    console.log("Sports:", sports)
})
let svg4 = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
d3.csv("../data/video_games4.csv").then(function(data) {
let xScale4 = d3.scaleBand()
    .domain(data.map(function(d) {return d.Genre}))
    .range([0, width])
svg4.append("g")
    .attr("transform", `translate(25, ${height / 2})`)
    .call(d3.axisBottom(xScale4).tickSize(0))
let yScale4 = d3.scaleLinear()
    .domain([0, 400])
    .range([height, 0]);
svg4.append("g")
    .call(d3.axisLeft(yScale4).ticks(10))
    .attr("transform", `translate(25, ${- height / 2})`);
let bars4 = svg4.selectAll("rect")
    .data(data)
bars4.enter()
    .append("rect")
    .merge(bars4)
    .attr("fill", "blue")
    .attr("x", function(d) {return xScale4(d.Genre) + 125})
    .attr("y", function(d) {return yScale4(d.JP_Sales)})
    .attr("width", 50)
    .attr("height", function(d) {return height - yScale4(d.JP_Sales)})
    .attr("transform", `translate(-50, ${- height / 2})`)
svg4.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 25)
        .text("JP Genre Sales")
        .attr("transform", `translate(${width / 2}, 50)`);
svg4.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Genre")
        .attr("transform", `translate(${width / 2}, ${height / 2 + 50} )`);
svg4.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("JP Sales (Millions)")
        .attr("transform", `translate(75, ${height / 2 + 50})`);
})
// 3
d3.csv("../data/video_games.csv").then(function(data) {
    let action = 0;
    let adventure = 0;
    let fighting = 0;
    let misc = 0;
    let platform = 0;
    let puzzle = 0;
    let racing = 0;
    let roleplaying = 0;
    let shooter = 0;
    let simulation = 0;
    let sports = 0;
    data.forEach(function(d, i) {
        if (d.Genre == "Action") {
            action += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Adventure") {
            adventure += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Fighting") {
            fighting += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Misc") {
            misc += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Platform") {
            platform += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Puzzle") {
            puzzle += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Racing") {
            racing += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Role-Playing") {
            roleplaying += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Shooter") {
            shooter += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Simulation") {
            simulation += parseInt(d.Other_Sales)
        }
        if (d.Genre == "Sports") {
            sports += parseInt(d.Other_Sales)
        }
    })
    console.log("Action:", action)
    console.log("Adventure:", adventure)
    console.log("Fighting:", fighting)
    console.log("Misc:", misc)
    console.log("Platform:", platform)
    console.log("Puzzle:", puzzle)
    console.log("Racing:", racing)
    console.log("Role-Playing:", roleplaying)
    console.log("Shooter:", shooter)
    console.log("Simulation:", simulation)
    console.log("Sports:", sports)
})
let svg5 = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g");
d3.csv("../data/video_games5.csv").then(function(data) {
let xScale5 = d3.scaleBand()
    .domain(data.map(function(d) {return d.Genre}))
    .range([0, width])
svg5.append("g")
    .attr("transform", `translate(25, ${height / 2})`)
    .call(d3.axisBottom(xScale5).tickSize(0))
let yScale5 = d3.scaleLinear()
    .domain([0, 200])
    .range([height, 0]);
svg5.append("g")
    .call(d3.axisLeft(yScale5).ticks(10))
    .attr("transform", `translate(25, ${- height / 2})`);
let bars5 = svg5.selectAll("rect")
    .data(data)
bars5.enter()
    .append("rect")
    .merge(bars5)
    .attr("fill", "blue")
    .attr("x", function(d) {return xScale5(d.Genre) + 125})
    .attr("y", function(d) {return yScale5(d.Other_Sales)})
    .attr("width", 50)
    .attr("height", function(d) {return height - yScale5(d.Other_Sales)})
    .attr("transform", `translate(-50, ${- height / 2})`)
svg5.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 25)
        .text("Other Genre Sales")
        .attr("transform", `translate(${width / 2}, 50)`);
svg5.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Genre")
        .attr("transform", `translate(${width / 2}, ${height / 2 + 50} )`);
svg5.append("text")
        .style("text-anchor", "middle")
        .style("font-size", 15)
        .text("Other Sales (Millions)")
        .attr("transform", `translate(75, ${height / 2 + 50})`);
})
// 2.4
d3.csv("../data/video_games.csv").then(function(data) {
    let activision = 0;
    let capcom = 0;
    let electronicarts = 0;
    let microsoftgamestudios = 0;
    let nintendo = 0;
    let sega = 0;
    let sonycomputerentertainment = 0;
    let squareenix = 0;
    let taketwointeractive = 0;
    let ubisoft = 0;
    
    data.forEach(function(d, i) {
        if (d.Genre == "Action") {
            if (d.Publisher == "Activision") {
                activision += 1;
            }
            if (d.Publisher == "Capcom") {
                capcom += 1;
            }
            if (d.Publisher == "Electronic Arts") {
                electronicarts += 1;
            }
            if (d.Publisher == "Microsoft Game Studios") {
                microsoftgamestudios += 1;
            }
            if (d.Publisher == "Nintendo") {
                nintendo += 1;
            }
            if (d.Publisher == "Sega") {
                sega += 1;
            }
            if (d.Publisher == "Sony Computer Entertainment") {
                sonycomputerentertainment += 1;
            }
            if (d.Publisher == "Square Enix") {
                squareenix += 1;
            }
            if (d.Publisher == "Take-Two Interactive") {
                taketwointeractive += 1;
            }
            if (d.Publisher == "Ubisoft") {
               ubisoft += 1;
            }
        }
        if (d.Genre == "Adventure") {
        }
        if (d.Genre == "Fighting") {
        }
        if (d.Genre == "Misc") {
        }
        if (d.Genre == "Platform") {
        }
        if (d.Genre == "Puzzle") {
        }
        if (d.Genre == "Racing") {
        }
        if (d.Genre == "Role-Playing") {
        }
        if (d.Genre == "Shooter") {
        }
        if (d.Genre == "Simulation") {
        }
        if (d.Genre == "Sports") {
        }
    })
    console.log("Activision", activision)
    console.log("Capcom", capcom)
    console.log("Electronic Arts", electronicarts)
    console.log("Microsoft Game Studios", microsoftgamestudios)
    console.log("Nintendo", nintendo)
    console.log("Sega", sega)
    console.log("Sony Computer Entertainment", sonycomputerentertainment)
    console.log("Square Enix", squareenix)
    console.log("Take-Two Interactive", taketwointeractive)
    console.log("Ubisoft", ubisoft)
})
// 3.1
var data = {Activision: 0.24, Capcom: 0.12, EA: 0.14, Microsoft: 0.02, Nintendo: 0.06, Sega: 0.08, Sony: 0.07, SquareEnix: 0.04, TakeTwo: 0.07, Ubisoft: 0.15, Other: 0.01};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg6 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg6.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg6.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg6.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg6.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Action Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.2
var data = {Activision: 0.10, Capcom: 0.08, EA: 0.05, Nintendo: 0.14, Sega: 0.12, Sony: 0.16, SquareEnix: 0.03, TakeTwo: 0.05, Ubisoft: 0.24, Other: 0.03};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg7 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg7.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg7.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg7.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg7.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Adventure Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.3
var data = {Activision: 0.03, Capcom: 0.22, EA: 0.15, Microsoft: 0.02, Nintendo: 0.14, Sega: 0.12, TakeTwo: 0.07, Ubisoft: 0.22, Other: 0.03};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg8 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg8.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg8.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg8.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg8.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Fighting Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.4
var data = {Activision: 0.15, Capcom: 0.02, EA: 0.07, Microsoft: 0.05, Nintendo: 0.15, Sega: 0.09, Sony: 0.19, TakeTwo: 0.04, Ubisoft: 0.23, Other: 0.01};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg9 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg9.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg9.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg9.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg9.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Misc Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.5
var data = {Activision: 0.14, EA: 0.04, Nintendo: 0.26, Sega: 0.11, Sony: 0.15, TakeTwo: 0.03, Ubisoft: 0.16, Other: 0.11};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg10 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg10.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg10.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg10.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg10.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Platform Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.6
var data = {Activision: 0.04, Capcom: 0.04, EA: 0.04, Nintendo: 0.47, Sega: 0.14, Sony: 0.08, SquareEnix: 0.04, Ubisoft: 0.15};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg11 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg11.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg11.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg11.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg11.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Puzzle Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.7
var data = {Activision: 0.15, Capcom: 0.03, EA: 0.32, Microsoft: 0.04, Nintendo: 0.08, Sega: 0.10, Sony: 0.13, TakeTwo: 0.04, Ubisoft: 0.11};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg12 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg12.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg12.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg12.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg12.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Racing Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.8
var data = {Activision: 0.08, Capcom: 0.07, EA: 0.07, Microsoft: 0.03, Nintendo: 0.20, Sega: 0.12, Sony: 0.09, SquareEnix: 0.25, Ubisoft: 0.08, Other: 0.01};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg13 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg13.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg13.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg13.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg13.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Role-Playing Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.9
var data = {Activision: 0.25, Capcom: 0.04, EA: 0.22, Microsoft: 0.04, Nintendo: 0.04, Sega: 0.06, Sony: 0.08, TakeTwo: 0.10, Ubisoft: 0.14, Other: 0.03};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg14 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg14.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg14.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg14.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg14.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Shooter Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.10
var data = {Activision: 0.07, EA: 0.34, Microsoft: 0.05, Nintendo: 0.08, Sega: 0.04, Sony: 0.04, Ubisoft: 0.35, Other: 0.03};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg15 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg15.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg15.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg15.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg15.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Simulation Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);
// 3.11
var data = {Activision: 0.11, EA: 0.45, Nintendo: 0.04, Sega: 0.11, Sony: 0.10, TakeTwo: 0.12, Ubisoft: 0.06, Other: 0.01};
var width2 = 1000;
    height2 = 1000;
    radius = 250;
var svg16 = d3.select("body")
    .append("svg")
    .attr("width", width2)
    .attr("height", height2)
    .append("g")
    .attr("transform", `translate(${width2 / 4}, ${width2 / 4})`);
var pie = d3.pie()
    .value(function(d) {return d.value})
var piedata = pie(d3.entries(data))
var arcGenerator = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)
var arcLabel = d3.arc()
    .innerRadius(0)
    .outerRadius(radius * 1.75)
var color = d3.scaleOrdinal()
    .domain(data)
    .range(d3.schemeSet1);
svg16.selectAll("slices")
    .data(piedata)
    .enter()
    .append("path")
    .attr("d", arcGenerator)
    .attr("fill", function(d) {return (color(d.data.key))})
    .attr("stroke", "white")
svg16.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.value})
    .attr("transform", function(d) {return "translate(" + arcGenerator.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg16.selectAll("slices")
    .data(piedata)
    .enter()
    .append("text")
    .text(function(d) {return d.data.key})
    .attr("transform", function(d) {return "translate(" + arcLabel.centroid(d) + ")";  })
    .style("text_anchor", "middle")
    .style("font-size", 15)
svg16.append("text")
    .style("text-anchor", "middle")
    .style("font-size", 25)
    .text("Sports Genre Top Publishers")
    .attr("transform", `translate(25, ${height2 / 3})`);