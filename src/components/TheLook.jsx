import React, { useState } from "react";
import PdfViewer from "../components/tools/pdfviewer.jsx";

const pdfFiles = 

 
  [
  {
    id: 1,
    file: "/thelookpdfs/TheLook Data Analysis-1_cropped.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            'As an entry point into this analysis, I wanted to see some of the
            trends of the user data. I coalesced all the user events in the
            Events table into a unique "User Identifier" that was either, their
            real user ID, or the IP address associated with the event. The
            limitations of this coalesce include the double counting of
            individualds who accessed the site from different devices,
            locations, or were using VPNs or other means of IP address
            rotation.',
          </p>
          <p></p>
          <p>
            in this graph, we see the number of first sessions, last sessions.
            The First Session and Last Session graphs were tightly clustered, so
            I added the measure Last Sessions - First Sessions, which should be
            a good indicator of returning traffic. The reference line in red is
            0, meaning data below this line indicates more last sessions than
            first sessions. From this graph, it's obvious that TheLook began
            experiencing troubling user trends that began in April of 2023, and
            became more evident by July of the same year. Because there is no
            narrative for TheLook dataset, I can only speculate on the spikes
            that occur in all of the data, but it would appear that there was a
            very large "Going Out of Business" sale that occurred in January
            2024, and the data shows that there was a large influx of new users,
            but the retention rate was very low.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    file: "/thelookpdfs/TheLook Data Analysis-2.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            The next section of analysis I wanted to see what the gender and age
            demographics. The first immediate observation is that the
            approximate 50/50 split in gender is unique among online retailers,
            with the ultimate comparison being Amazon, who has a 75/25 percent
            split in favor of female shoppers. This split likely has an impact
            on product cost, though in what way isn't clear from this data.
          </p>
          <p>
            Secondly, the age demographics are equally surprising. The most
            represented age group are individuals 50 years and older. It's
            important to note that most age data comes From users who have a
            "User ID", and as such are registered memberes. While this is
            limitation, it at least shows that the largest demographic most
            likely to register are users 50 years of age and older.
          </p>
          <p>
            As gender and age were the only 2 demographic axes available in the
            data, this was the primary limitation of the demographic analysis.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    file: "/thelookpdfs/TheLook Data Analysis-3.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            When it comes to product analysis, conclusions are difficult to draw
            from just the rankings. The top 10 brands are all well known brands,
            and the top 7 categories are well defined, high unit volume
            categories.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    file: "/thelookpdfs/TheLook Data Analysis-4.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            When we begin looking at Profit per Category, there are a few
            interesting observations. While Jeans, Outerwear & Coats and
            Sweaters are still the top categories in terms of profit, Sleep &
            Lounge didn't make the top 7 categories in terms of profit, and was
            replaced in the ranking by Tops & Tees.
          </p>
          <p>
            When looking at the highest and lowest product cost %, we can see
            one factor that likely effects global product cost in relation to
            demographics is the high cost % of Suits, in the mens category. At
            60% product cost, this is the second mostt costly category, beat out
            only by clothing sets, a category which didn't make the top 7
            categories in terms of profit. Jeans similarly ranked as one of the
            most cost heavy categories, even while being the sales leader for
            all categories.
          </p>
          <p>
            In terms of the lowest product cost %, Suits and Sports Coats, and
            Blazers and Jackets remain untapped markets to counter the high cost
            % of the Mens Suits category. A possible upsale strategy exists in
            pre and post sale deals on adding a blazer or jacket to a jeans
            purchase, coupled with some of the top brand specific marketing with
            brands like like Calvin Klein, who offers both Jeans and
            Suits/Blazers. For female customers, the lowest cost % upsell
            opportunity is Socks and Hosiery, which exists as an upsale
            opportunity for almost any clothing purchase.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 5,
    file: "/thelookpdfs/TheLook Data Analysis-5.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            The next section of analysis looks at TheLook's processing time and
            order status over time. Very heavy instability in the early months
            of the company's history could be a possible cause of the dropping
            customer retention rates reference in the first section of analysis.
            Through most of 2020, processing time averages were above 2.5 days,
            and some months up to 3. When competing online retail processing
            time averages of 1-1.5 days, this is a significant difference. Even
            after the company stabilized it's purchasing times, 2 days falls
            well behind the industry average.
          </p>
          <p>
            Looking further into the order processing data, we see that TheLook
            had extraordinary low return rates, compared to other clothing
            retailers. The average return rate reported by Amazon for their
            Clothing category is between 15-45%. In this light, the 10% lifetime
            return rate is a very
          </p>
        </div>
      </>
    ),
  },
  {
    id: 6,
    file: "/thelookpdfs/TheLook Data Analysis-6.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            For this data, we looked at session counts and the traffic source
            over time.
          </p>
          <p>
            By far their most successful traffic source is email marketing,
            generating 45% of the traffic and sales revenue. All categories
            seemed to have the similar capture rates, mirroring the session
            count rates very closely. Similarly, all categories grew at
            approximately the same rate over time.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 7,
    file: "/thelookpdfs/TheLook Data Analysis-7.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            For the next section of data, we looked at product cost, revenue,
            and profit over time by aggregating daily sales and extracting cost
            from each order. The running cost % is extrapolated over a 1 month
            period for consistency.
          </p>
          <p>
            It doesn't appear that the overall product cost changed
            siginificantly over time, indicating a strong liklihood that
            category sales didn't change significantly. The running product cost
            % only varied between ~48% and 48.5% between startup in 2019 and
            significant growth through 2022, representing a 150 variance in
            profit at $10k in sales/day. When sales balooned, the product cost
            stablized around 48.2%.
          </p>
        </div>
      </>
    ),
  },
  {
    id: 8,
    file: "/thelookpdfs/TheLook Data Analysis-8.pdf",
    analysis: (
      <>
        <div className="text-base space-y-8">
          <p>
            For the final analysis, we engineered an extensive cohort analysis
            grouped by the month of the users first sessions and the life of the
            user was tracked for the remained of the available data period.
          </p>
          <p>
            One interesting observation from the cohort analysis is that,
            especially in the early days of TheLook, users were bipolar in their
            retentions rates. The 2 largest categories in the first year of the
            data were one-off users, and users whos lifespan extended 1-2 years.
            A middling market of useres who's lifespan extended 3-9 months
            didn't begin forming until well into 2021. This was even more
            apparent in the more granular data, when breaking down cohorts into
            percentiles, the average of the lower 90% of the user lifespans was
            rounded up to 0 days. However, the upper 10% has lifespans that were
            through most of TheLooks existence. The line representign the
            average lifespan of each cohort is almost misleading in this regard,
            as the vast majority of users through most of TheLooks history were
            single time users. However, those that did return did so frequently,
            and for a long period of time.
          </p>
        </div>
      </>
    ),
  },
];


const TheLook = () => {
  return (
    <>
      <div className="bg-black text-white pt-8 mb-16 rounded-3xl pb-20 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-8">
          TheLook Data Analysis
        </h1>
        <h2 className="text-xl pb-4">
          This analysis was done using TheLook, a public synthetic dataset
          created and published by Google. The data was hosted locally in a
          PostgreSQL database, the queries were written in a DBT framework, and
          the analysis and graphing were done in Power BI. While I wanted to be
          able to host the live graphs with zoom, filtering, and better
          labeling, I did not want to pay for the Premium User license. The data
          below is the static PDF export from the Power BI report.
        </h2>
        <h2 className="text-xl pb-4">
          The DBT code and all related code is hosted on{" "}
          <a
            href="https://github.com/dustinbruce50"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            my GitHub
          </a>
        </h2>
        <PdfViewer pdfFiles={pdfFiles} />
      </div>
    </>
  );
};

export default TheLook;
