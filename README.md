[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# [nr1-billboard-steps] 

> NewRelic nr1 billboard visualization which allows for one query and then a collection of filters(NRQL WHERE).  Each filter is appended to the query and will produce a 
> seperate billboard below the previous.  


![example transactions filtered 3 different ways ](https://github.com/newrelic-experimental/nr1-billboard-steps/blob/main/screenshots/example1.PNG)
![example transactions filtered 3 different ways ](https://github.com/newrelic-experimental/nr1-billboard-steps/blob/main/screenshots/example2.PNG)
## Installation/Building

> install the modules  --  npm install
> build the nerdpack   --  nr1 nerdpack:build
> serve the nerdpack   --  nr1 nerdpack:serve

## Usage
> This visualization was orginally constructed to be used along side the nr1-funnelz visualization to mimic the nr1-customer-journey application.   Because its a 
> completly independent visualization, it can be used on its own. 
> Each filter (step) can be titled.

> NOTE:  make sure to generate a new uuid for the nerdpack  --  nr1 nerdpack:uuid <br />
> All nr1 commands found here: https://developer.newrelic.com/explore-docs/nr1-cli 


## Support

New Relic hosts and moderates an online forum where customers can interact with New Relic employees as well as other customers to get help and share best practices. Like all official New Relic open source projects, there's a related Community topic in the New Relic Explorers Hub. You can find this project's topic/threads here:

## Contributing
We encourage your contributions to improve nr1-billboard-steps! Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project.
If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company,  please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License
nr1-billboard-steps is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
>[If applicable: The nr1-billboard-steps also uses source code from third-party libraries. You can find full details on which libraries are used and the terms under which they are licensed in the third-party notices document.]
