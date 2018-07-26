library(dplyr)
library(tidyr)
library(readr)
library(reshape2)
library(jsonlite)

##Read the file with input and performance indicators
input_file <- "C:\\work\\4d-time-series-visualiser\\education\\education_data_4d_visualiser\\edu_perf_data.csv"
input_df <- read.csv(input_file)

noChangeColNames <- c("Year","State","Total_Enrol","PTR" ,"SCR")

for (i in names(input_df))
{
   if (!is.element(i, noChangeColNames)  )
   {
      input_df[i] <- input_df[i] * 100
   }
  else
  {
    
  }
}

##rows with NAs
missing_data <- input_df[!complete.cases(input_df), ]

##Read the State to Region Mapping file
state_region_mapping_file <- "C:\\work\\4d-time-series-visualiser\\education\\education_data_4d_visualiser\\state_region_mapping.csv"
state_region_mapping <- read.csv(state_region_mapping_file)

##Merge the above two dataframes and omit NAs in input data. Sort the resulting
##dataframe
merge_data <- merge(na.omit(input_df), state_region_mapping, by.x = "State", by.y = "State")
edu_data <- merge_data[order(merge_data$Year, merge_data$State),]

##Structure of the merged dataframe
str(edu_data)

##Write to a JSON file
write_lines(jsonlite::toJSON(edu_data), "C:\\work\\4d-time-series-visualiser\\education\\education_data_4d_visualiser\\edu_data.json")
