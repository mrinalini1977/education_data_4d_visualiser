function draw(data)
{
		var selectOptions = Object.keys(data[1]);
		
		//removes column indicating time component
		selectOptions = selectOptions.splice(1,selectOptions.length);
		
		var objX = 	{"Out Of School Children(%)":"Out_of_School", "Pvt School Enrolment(%)":"Pvt_School","Govt School Enrolment(%)" :"Govt_School", "Other School Enrolment(%)":"Other_School","Girls Enrolment(%)":"Girls_Enrol",
					"Total Enrolment":"Total_Enrol", "Pupil Teacher Ratio": "PTR", "Student Classroom Ratio" : "SCR", "Schools With Tolilets(%)": "common_or_boys_toilet",
					"Schools With Drinking Water(%)": "Drinking_Water", "Child(5-16) Cannot Read(%)": "Child_Read_Nothing", "Child(5-16) Highest Read Level - Letter(%)":"Child_Read_Highest_Letter",
					"Child(5-16) Highest Read Level - Word(%)": "Child_Read_Highest_Letter", "Child(5-16) Highest Read Level - Std 1 Text(%)": "Child_Read_Highest_Std1text", 
					"Child(5-16) Highest Read Level - Std2 Text(%)": "Child_Read_Highest_Std2text",
					"Child(5-16) Cannot Identify Numbers(%)": "Child_Math_Nothing", "Child(5-16) Highest Math - Numbers 1-9(%)": "Child_Math_Highest_Number_1to9", 
					"Child(5-16) Highest Math - Numbers 11 to 99(%)": "Child_Math_Highest_Number11to99", "Child(5-16) Highest Math - Subtraction(%)" : "Child_Math_Highest_Subtraction",
					"Child(5-16) Highest Math - Division(%)": "Child_Math_Highest_Division"};
					
		var objY = 	{"Pvt School Enrolment(%)":"Pvt_School","Govt School Enrolment(%)" :"Govt_School","Out Of School Children(%)":"Out_of_School", "Other School Enrolment(%)":"Other_School","Girls Enrolment(%)":"Girls_Enrol",
					"Total Enrolment":"Total_Enrol", "Pupil Teacher Ratio": "PTR", "Student Classroom Ratio" : "SCR", "Schools With Tolilets(%)": "common_or_boys_toilet",
					"Schools With Drinking Water(%)": "Drinking_Water", "Child(5-16) Cannot Read(%)": "Child_Read_Nothing", "Child(5-16) Highest Read Level - Letter(%)":"Child_Read_Highest_Letter",
					"Child(5-16) Highest Read Level - Word(%)": "Child_Read_Highest_Letter", "Child(5-16) Highest Read Level - Std 1 Text(%)": "Child_Read_Highest_Std1text", 
					"Child(5-16) Highest Read Level - Std2 Text(%)": "Child_Read_Highest_Std2text",
					"Child(5-16) Cannot Identify Numbers(%)": "Child_Math_Nothing", "Child(5-16) Highest Math - Numbers 1-9(%)": "Child_Math_Highest_Number_1to9", 
					"Child(5-16) Highest Math - Numbers 11 to 99(%)": "Child_Math_Highest_Number11to99", "Child(5-16) Highest Math - Subtraction(%)" : "Child_Math_Highest_Subtraction",
					"Child(5-16) Highest Math - Division(%)": "Child_Math_Highest_Division"};
					
	    var objSize =	{"Total Enrolment":"Total_Enrol", "Pvt School Enrolment(%)":"Pvt_School","Govt School Enrolment(%)" :"Govt_School","Out Of School Children(%)":"Out_of_School", 
						"Other School Enrolment(%)":"Other_School","Girls Enrolment(%)":"Girls_Enrol",
						"Pupil Teacher Ratio": "PTR", "Student Classroom Ratio" : "SCR", "Schools With Tolilets(%)": "common_or_boys_toilet",
						"Schools With Drinking Water(%)": "Drinking_Water", "Child(5-16) Cannot Read(%)": "Child_Read_Nothing", 
						"Child(5-16) Highest Read Level - Letter(%)":"Child_Read_Highest_Letter",
						"Child(5-16) Highest Read Level - Word(%)": "Child_Read_Highest_Letter", "Child(5-16) Highest Read Level - Std 1 Text(%)": "Child_Read_Highest_Std1text", 
						"Child(5-16) Highest Read Level - Std2 Text(%)": "Child_Read_Highest_Std2text",
						"Child(5-16) Cannot Identify Numbers(%)": "Child_Math_Nothing", "Child(5-16) Highest Math - Numbers 1-9(%)": "Child_Math_Highest_Number_1to9", 
						"Child(5-16) Highest Math - Numbers 11 to 99(%)": "Child_Math_Highest_Number11to99", "Child(5-16) Highest Math - Subtraction(%)" : "Child_Math_Highest_Subtraction",
						"Child(5-16) Highest Math - Division(%)": "Child_Math_Highest_Division"};
					
		var objColor = {"State":"State","Region":  "Region" };
		
		
		xOptions = Object.keys(objX);
		yOptions = Object.keys(objY);
		sizeOptions = Object.keys(objSize);
		colorOptions = Object.keys(objColor);
		
			
		var body = d3.select("body");
		
		// X-axis Variable
		var span = body.append("span")
						.text("Select X-Axis Variable");
		var xInput = body.append("select")
							.attr("id","xSelect")
							.on("change",xChange)
						  .selectAll("option")
							.data(xOptions)
							.enter()
						  .append("option")
							.attr("value",function(d){ return d;})
							.text(function(d) { return d;});
		span = body.append("span")
						.text("\u00A0");
		
		span = body.append("span")
						.text("Select size Variable");
		var sizeInput = body.append("select")
							.attr("id","sizeSelect")
							.on("change",sizeChange)
						  .selectAll("option")
							.data(sizeOptions)
							.enter()
						  .append("option")
							.attr("value",function(d){ return d;})
							.text(function(d) { return d;});
		body.append("br");
		body.append("br");
		span = body.append("span")
						.text("Select Y-Axis Variable");
		var yInput = body.append("select")
							.attr("id","ySelect")
							.on("change",yChange)
						  .selectAll("option")
							.data(yOptions)
							.enter()
						  .append("option")
							.attr("value",function(d){ return d})
							.text(function(d) { return d;});
		span = body.append("span")
						.text("\u00A0");
							
		span = body.append("span")
						.text("Select color Variable");
		var colorInput = body.append("select")
							.attr("id","colorSelect")
							.on("change",colorChange)
						  .selectAll("option")
							.data(colorOptions)
							.enter()
						  .append("option")
							.attr("value",function(d){ return d})
							.text(function(d) { return d;});
							
		body.append("br");
		
		
		var margin = {
						top : 50,
						right : 50,
						bottom : 50,
						left : 50
					 };
		
		var svgHeight = 550;
		var svgWidth = 900;
		var buttonHeight = 30, buttonWidth = 50;
		
	    var svg = dimple.newSvg("body",svgWidth, svgHeight);
		
		
	
					
		var button = svg.append("g")
							.attr("id","button")
							.classed("Pause",true)
							.attr("transform", "translate(" +(margin.left *2.5) + "," +
											(margin.top) + ")");
					button.append("rect")
							.attr("height",buttonHeight)
							.attr("width",buttonWidth)
							.attr("fill","lightgrey")
							.on("mouseover",function(){d3.select(this).attr("fill","grey")})
							.on("mouseout",function(){d3.select(this).attr("fill","lightgrey")})
							.style("stroke","black");
					button.append("text")
							.attr("x",(buttonWidth/2))
							.attr("y",buttonHeight/2)
							.style("font-size", "12px")
							.attr("text-anchor","middle")
							.attr("alignment-baseline","central")
							.text("Pause");
					button.on("click", onClick);
		
		var timeVar = "Year";
				
		var dropdown_x = d3.select("#xSelect");
		var dropdown_y = d3.select("#ySelect");
		var dropdown_size = d3.select("#sizeSelect");
		var dropdown_color = d3.select("#colorSelect");
		
		var xVar = objX[dropdown_x.node().options[dropdown_x.node().selectedIndex].value];
	    var yVar = objY[dropdown_y.node().options[dropdown_y.node().selectedIndex].value];
		var sizeVar = objSize[dropdown_size.node().options[dropdown_size.node().selectedIndex].value];
		var colorVar = objColor[dropdown_color.node().options[dropdown_color.node().selectedIndex].value];
		
			
		var chart = new dimple.chart(svg, data);
		
		chart.setBounds(margin.left, margin.top + buttonHeight * 1.2, svgWidth - margin.left - margin.right - buttonWidth -100,svgHeight - margin.top - margin.bottom - buttonHeight);
			
		var xData = data.map(function(d) { return d[xVar] ; } );
		var yData = data.map(function(d) { return d[yVar] ; } );
		var sizeData = data.map(function(d) { return d[sizeVar];});
							 
		var xData_l = Math.min.apply(null, xData);
		var xData_u = Math.max.apply(null, xData);
	
		var yData_l = Math.min.apply(null,yData);
		var yData_u = Math.max.apply(null,yData);
	
		var sizeData_l = Math.min.apply(null,sizeData);
		var sizeData_u = Math.max.apply(null, sizeData);
	
		var xData_r = xData_u - xData_l;
		var yData_r = yData_u - yData_l;
			
		var x_axis = chart.addMeasureAxis("x", xVar);
		
		if(xVar === "Total_Enrol")
		{
			x_axis.overrideMin  = 0;
			x_axis.overrideMax = Math.ceil(xData_u);
		}
		else if (xVar === "SCR" || xVar === "PTR")
		{
			x_axis.overrideMin  = 0;
			x_axis.overrideMax = 100;
		}
		else
		{
			x_axis.overrideMin  = 0;
			x_axis.overrideMax = 1;
		}
		
		
		x_axis.ticks = 15;
		x_axis.title = dropdown_x.node().options[dropdown_x.node().selectedIndex].value;
	
		var y_axis = chart.addMeasureAxis("y", yVar);
		
		if(yVar === "Total_Enrol")
		{
			y_axis.overrideMin = Math.floor(yData_l);
			y_axis.overrideMax = Math.floor(yData_u);
		}
		else if (yVar === "SCR" || yVar === "PTR")
		{
			y_axis.overrideMin  = 0;
			y_axis.overrideMax = 100;
		}
		else
		{
			y_axis.overrideMin = 0;
			y_axis.overrideMax = 1;
		}
		
		y_axis.ticks = 10;
		y_axis.title = dropdown_y.node().options[dropdown_y.node().selectedIndex].value;
	
		var size_axis = chart.addMeasureAxis("z", sizeVar);
		
		if(sizeVar === "Total_Enrol")
		{
			size_axis.overrideMin = Math.floor(sizeData_l);
			size_axis.overrideMax = Math.ceil(sizeData_u);	
		}
		else if (sizeVar === "SCR" || sizeVar === "PTR")
		{
			size_axis.overrideMin  = 0;
			size_axis.overrideMax = 100;
		}
		else
		{
			size_axis.overrideMin = 0;
			size_axis.overrideMax = 1;	
		}
		
		size_axis.title = dropdown_size.node().options[dropdown_size.node().selectedIndex].value;
			
		
		var story = chart.setStoryboard(timeVar, function (d) 
		{
	        console.log(d.frameValue);
	    });
		
		story.frameDuration = 500;
			
		series = chart.addSeries( colorVar, dimple.plot.bubble);
		
		
		chart.addLegend(svgWidth-margin.right-margin.left -50 ,margin.top + 20, margin.right, svgHeight - margin.top);
    	chart.draw();
				 
		 		
		
		function xChange ()
		{
			var value = objX[this.value];
			
			var xData = data.map(function(d) { return d[value] ; } );
			var xData_l = Math.min.apply(null,xData);
			var xData_u = Math.max.apply(null,xData);
			var xData_r = xData_u - xData_l;
			
			x_axis.measure = value;
			if(value == "Total_Enrol")
			{
				x_axis.overrideMin  = Math.floor(xData_l);
				x_axis.overrideMax = Math.ceil(xData_u);
			}
			else if (value === "SCR" || value === "PTR")
			{
				x_axis.overrideMin  = 0;
				x_axis.overrideMax = 100;
			}
			else
			{
				x_axis.overrideMin  = 0;
				x_axis.overrideMax = 1;
			}
			
			x_axis.ticks = 15;
			x_axis.title = this.value;
			
            		
			chart.draw();
			
			updateButton("Pause");
		}
		
		function yChange ()
		{
			var value = objY[this.value];
			
			var yData = data.map(function(d) { return d[value] ; } );
			var yData_l = Math.min.apply(null,yData);
			var yData_u = Math.max.apply(null,yData);
			
			y_axis.measure = value;
			
			if(value == "Total_Enrol")
			{
				y_axis.overrideMin = Math.floor(yData_l);
				y_axis.overrideMax = Math.floor(yData_u);
			}
			else if (value === "SCR" || value === "PTR")
			{
				y_axis.overrideMin  = 0;
				y_axis.overrideMax = 100;
			}
			else
			{
				y_axis.overrideMin = 0;
				y_axis.overrideMax = 1;
			}
			
			y_axis.ticks = 15;
			y_axis.title = this.value;
            		
			chart.draw();
			
			updateButton("Pause");
		}
		
		function sizeChange ()
		{
			var value = objSize[this.value];
			
			var sizeData = data.map(function(d) { return d[value] ; } );
			var sizeData_l = Math.min.apply(null,sizeData);
			var sizeData_u = Math.max.apply(null,sizeData);
			
			size_axis.measure = value;
			if(value == "Total_Enrol")
			{
				size_axis.overrideMin = Math.floor(sizeData_l);
				size_axis.overrideMax = Math.ceil(sizeData_u);	
			}
			else if (value === "SCR" || value === "PTR")
			{
				size_axis.overrideMin  = 0;
				size_axis.overrideMax = 100;
			}
			else 
			{
				size_axis.overrideMin = 0;
				size_axis.overrideMax = 1;	
			}
			size_axis.title = this.value;
            		
			chart.draw();
			
			updateButton("Pause");
		}
		
		function colorChange ()
		{
			var value = objColor[this.value];
				
			chart.series[0].shapes.remove();
			chart.series.splice(0, 1);
			
			if (value == "Region")
			{
				series = chart.addSeries(['State', 'a', 'Region'], dimple.plot.bubble);
			}
			else
			{
				series = chart.addSeries(value, dimple.plot.bubble);
			}
		
		    var regions = dimple.getUniqueValues(data, "Region");
			
			regions.forEach(function (region, k) {
            chart.assignColor(
              region,
              chart.defaultColors[k].fill,
              "white", .8);
            }, this);
        	
				
			chart.draw();
			
			updateButton("Pause");
		
		}
		
		function onClick() 
		{
			if(button.classed("Pause"))
			{
				button.classed("Pause",false);
				updateButton("Play");
				story.pauseAnimation();
			}
			else if(button.classed("Play"))
			{
				button.classed("Play",false);
				updateButton("Pause");
				story.startAnimation();
				//story.frameDuration = 500;
			}
		}
	
		function updateButton(newClass)
		{
			button.classed(newClass,true);
			d3.select("#button text")
				.transition()
				.text(newClass);
		}
		
	
}