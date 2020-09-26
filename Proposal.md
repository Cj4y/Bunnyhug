# Capstone Project
## SEG 4910 & SEG 4911 Fall
### Cheryl Tollola
8317298
BASc Software Engineering (CO-OP)



## Roles
Cheryl Tollola is the project manager, lead software architect and main programmer.
I will be responsible for keeping my schedule in check, as well as a clear and documented project structure. As the main programmer, I will handle all front-end, back-end, search and machine learning programming aspects of the capstone project.



## Bunnyhug
Currently in Canada, there is a market for selling or trading used clothing but currently people are limited to donating to a second-hand store, or to selling in person. The goal is to create a market platform where these sellers and buyers from across the country can interact while the web application platform handles the shipping process.
 
Buyers will be able to privately instant message the seller to ask them questions, and both users will be able to negotiate the final price of the item, which will then allow the buyer to input their payment information and address. Finally, a prepaid shipping label will be generated for the seller to send their item.
 
Listings posted by sellers will be able to be filtered by gender, category, brand, colour, etc, which could be automated slightly with image recognition. Search and fake listing filtering are important aspects of the project. This is to be able to identify accurate listings, and also the logic of which listings are seen over others. A big problem to solve in these applications is filtering out fake listings. For example: items being listed from Aliexpress.
 
There will be a machine learning aspect to suggest different sellers to the users based on their behaviour on the website. For example, they usually look at a specific brand, clothing category, or price range. There will be a front-end and back-end, and the technologies will be chosen based on what will fit the requirements. It will be designed to be used on computer and mobile browsers.
 
The target user base is normal people, Instagram fashion influencers selling old clothes or clothes they receive from sponsors, and small second-hand or consignment store owners who have their businesses online, or in person. The clothing resale market is predicted to overcome the traditional thrift and donation segment by 2024. The graphs below further describes the market opportunity.


 ![Opportunity in the clothing resale market](https://github.com/Cj4y/Bunnyhug/blob/master/graph1.PNG)

## Prioritization of Product Objectives (MoSCoW Prioritization)

To further refine the product objectives as development takes place, this table will be updated regularly.

M (must have) | S (should have) | C (could have) | W (will not have)


| **Objective**                                                               | **Prioritization** |
|-------------------------------------------------------------------------|----------------|
| Display of all listings on the website                                  | M              |
| Manipulation and filtering of listing                                   | M              |
| User able to post a listing                                             | M              |
| User accounts                                                           | M              |
| Storage of user information                                             | M              |
| One-to-one instant messaging between buyer and seller                   | M              |
| Buyer able to request a price change                                    | M              |
| Seller able to accept/ reject buyer’s price change                      | M              |
| Singular listing page                                                   | M              |
| Generate shipping label                                                 | M              |
| Payment page                                                            | M              |
| Search                                                                  | S              |
| Computer vision to define basic features in an uploaded listing photo   | S              |
| Suggest similar products to buyer                                       | S              |
| Filter out fake images with machine learning technique                  | C              |
| Suggest similar sellers to buyer                                        | C              |
| Web application works on computer browsers (Chrome, Firefox)            | M              |
| Web application works on mobile browser (Chrome, Safari)                | C              |



## Customers
### Ameya Bongale
bameya1990@gmail.com

Who is a systems engineer and worked on business operations at Amazon.
“User”

[LinkedIn link](https://www.linkedin.com/in/ameyabongale/)
 
 
### Yask Srivastava 
yask123@gmail.com

Who is a software developer at Shopify.
“Domain expert”

[GitHub link](https://github.com/yask123)

## Supervisor
### Miguel Garzon
mgarzon@uottawa.ca

Professor at uOttawa
Supervisor of SEG4910, SEG4911




## Schedule
### Meetings are weekly “in person” meetings
(In person for Ameya, video conferencing with Yask)
|**Bi-monthly meeting** | **Topic**                                                             |
|--------------------|--------------------------------------------------------------------------|
| Sept. 21           | Project proposal phase Requirements and Elicitation                      |
| Sept 26            | Programming milestone (Rails app, “Get One Done”)                        |
| Oct 1              | Status meeting with supervisor                                           |
| Oct 6              | Project requirements phase Shaping for cycle 1 Programming readjustments |
| Oct 27             | Programming milestone Evaluation                                         |
| Nov 10             | Shaping for cycle 2  Programming readjustments                           |
| Nov 24             | Programming milestone Evaluation                                         |
| Dec 14             | Shaping for cycle 3 Programming readjustments                            |
| Jan 12             | Programming milestone Evaluation                                         |
| Jan 26             | Shaping for cycle 4 Programming readjustments                            |
| Feb 9              | Programming milestone Evaluation                                         |
| Feb 23             | Shaping for cycle 5 Programming readjustments                            |
| Mar 9              | Programming readjustments Development completed                          |
| Mar 23             | End of formal review                                                     |
| April 5            | Presentation period                                                      |


## Software interfaces to be used
At this point, the known technologies/ programming languages to be used are:
* React
* Rails
* Elastic search
* Python - most common machine learning libraries
* Git
* Heroku/ AWS/ Google cloud
* graphql
* Firebase auth

_*However, this may change to meet the project requirements, or due to development constraints._

 


## Engineering challenges and risks
| **Challenge/ risk**                                                                                           | **How to  address it**                                                                                        |
|-----------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| Difficulty integrating different technologies with the short amount of time, and lack of other developers | -research existing apis or method -reduce the requirements  -search for advice from experienced developers |
| The web application becomes overly complex                                                                | -code or usability reviews -SOLID principles                                                               |
| First time using React and Rail in a meaningful way                                                       | -write some small test programs -see a expert if stuck too long                                            |
| (*More to be added) #TODO                                                                                 |                                                                                                            |
|                                                                                                           |                                                                                                            |
|                                                                                                           |                                                                                                            |
|                                                                                                           |                                                                                                            |




## Impact Analysis (Liabilities)
_"The system" refers to the web application, "Bunnyhug"_

**Business**

Benefit:
* Able to record how much traffic the website receives, and collect metrics on buyer and seller behaviour

Liability:
* Privacy and security of user accounts


**Environmental**

Benefit:
* There will be a new web-based option for the Canadian public to buy or sell second-hand clothing

Liability:
* If the web application is too similar to existing competitors, it will not stand out from the competition

**Financial**

Benefit:
* There is no need for a physical location to store clothing, since it is a direct service between a second-hand clothing seller, and a buyer
* The product will provide more competitive posting (of a item) fees and shipping prices compared to all non-Canadian competitors

Liability:
* The system must accurately handle transactions between buyers and sellers, or there will be legal and financial problems


**Legal**

Benefit: 
* The system will filter out fake items ie: Photos of products from AliExpress

Liability:
* Inaccuracies in filtering, flagging too many ads as fake listings
* Security of handling user accounts, and attached sensitive information

**End-user**

Benefit:
* The system creates a focused, photo-first marketplace for second-hand clothing resale
* The web application has a seamless system to allow for a seller to first advertise an item, confirm a sale, and print a label to ship their item
* Second-hand clothing buyers will find product recommendations based on their personal style and browsing behaviour
* The search function will list items searched for accurately
* The computer vision will help the seller identify the category of the item that they are selling

Liability:
* If the web application is hard to use and understand from a buyer or seller point of view
* There could be a mismatch on how, or if buyers and sellers of similar interests could find each other
* If the computer vision is too invasive or inaccurate to use


**Standard and legislation**

Liability:
* This will not be implemented in the scope of this project
* However, the issues with lost packages, or people selling fake or inaccurate products are an issue
* The laws of sale, return and sending of products must follow the laws of the Canadian government


## Development Process
**The development process is planned for approximately 26 weeks.**

**Shape Up will be used with 5 week cycles, for a total of 5 cycles.**

* The concept of using “Get One Piece Done” will be used to familiarize with a Rails app as the first task in the project early-on.
* Each cycle, a project will be chosen to “shape” out.
* Each cycle, the time spent by Cheryl will be well-defined.
* Use a proper betting table (may change).
* Start off by pitching the shaped work to the customers.
* Follow the development method each cycle



## Evaluation
| **Task**                                                              | **Evaluation**                                         |
|-----------------------------------------------------------------------|--------------------------------------------------------|
| Requirements Document                                                 | Meetings with customers Prioritization of requirements |
| UI drawings                                                           | Checklist/ Cognitive walkthrough                       |
| Create basic rails application                                        | Regular change-based code review with customer         |
| Allow user to authenticate in 30 seconds                              | Cognitive walkthrough                                  |
| Allow a user registration in 15 seconds                               | Cognitive walkthrough                                  |
| Allow an upload of a listing in 2 seconds                             | Cognitive walkthrough                                  |
| Allow user to sort 100 listings in 2 seconds                          | Cognitive walkthrough                                  |
| Allow user to use 5 filters at the same time                          | Cognitive walkthrough                                  |
| Allow a search results from 100 listings to be retrieved in 7 seconds | Cognitive walkthrough                                  |
| Display similar product suggestions in 5 seconds                      | Cognitive walkthrough                                  |
| Display a listing in 5 seconds                                        | Cognitive walkthrough                                  |
| User interface performs as expected 90% of the time                   | Formal inspection                                      |
| *(More to be added)                                                   |                                                        |
|                                                                       |                                                        |



## Project Schedule
| **Date**            | **Document**                                       | **Details**            |
|---------------------|----------------------------------------------------|------------------------|
| October             | Requirements elicitation and Requirements document |                        |
|                     | Report 1                                           |                        |
| November            | Design document first version                      |                        |
|                     | Report 2                                           |                        |
| December            | Report 3                                           |                        |
| January             | Report 4                                           |                        |
| February            | Report 5                                           |                        |
| March               | Source code completed                              | Includes documentation |
|                     | User manual                                        |                        |
|                     | Usability evaluation                               |                        |
|                     | Report 6                                           |                        |
| *(More to be added) |                                                    |                        |
|                     |                                                    |                        |
|                     |                                                    |                        |


## References
https://www.thredup.com/resale/


