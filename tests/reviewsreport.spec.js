var reviews = {
	restaurantA: [
		{
			title: '',
			stars: 4,
			cost: 2,
			description: ''
		},
		{
			title: '',
			stars: 3,
			cost: 1,
			description: ''
		},
		{
			title: '',
			stars: 4,
			cost: 3,
			description: ''
		},
		{
			title: '',
			stars: 4,
			cost: 3,
			description: ''
		},
		{
			title: '',
			stars: 5,
			cost: 2,
			description: ''
		},
		{
			title: '',
			stars: 3,
			cost: 2,
			description: ''
		}
	],

	restaurantB: [
		{
			title: '',
			stars: 5,
			cost: 3,
			description: ''
		},
		{
			title: '',
			stars: 3,
			cost: 4,
			description: ''
		},
		{
			title: '',
			stars: 4,
			cost: 4,
			description: ''
		},
		{
			title: '',
			stars: 5,
			cost: 4,
			description: ''
		},
		{
			title: '',
			stars: 2,
			cost: 3,
			description: ''
		},
		{
			title: '',
			stars: 5,
			cost: 4,
			description: ''
		},
		{
			title: '',
			stars: 5,
			cost: 5,
			description: ''
		}
	]
};
describe("reviewreport", function(){
  //************Restaurant A&B tests************
  it("getAverageRating() should return the average of all the star ratings for Restaurant A", function(){
    //Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var averageRatingA =  reviewReportRestaurantA.getAverageRating();
		var averageRatingB =  reviewReportRestaurantB.getAverageRating();
    //Assert is an expectation is Jasmine
    expect(averageRatingA).toEqual(3.8333333333333335);
		expect(averageRatingB).toEqual( 4.142857142857143);
  });

  it("getAverageCost() should return the average cost of all the ratings", function(){
    //Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var averageCostA = reviewReportRestaurantA.getAverageCost();
		var averageCostB = reviewReportRestaurantB.getAverageCost();
    //Assert
    expect(averageCostA).toEqual(2.1666666666666665);
		expect(averageCostB).toEqual(3.857142857142857);
  });

	it("convertCostToDollarSign() should return $", function(){
		//Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var convertCostToDollarSignA = reviewReportRestaurantA.convertCostToDollarSign(1.4);
		var convertCostToDollarSignB = reviewReportRestaurantB.convertCostToDollarSign(1.4);
    //Assert
    expect(convertCostToDollarSignA).toEqual('$');
		expect(convertCostToDollarSignB).toEqual('$');
	});

  it("convertCostToDollarSign() should return $$", function(){
		//Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var convertCostToDollarSignA = reviewReportRestaurantA.convertCostToDollarSign(2.1666666666666665);
		var convertCostToDollarSignB = reviewReportRestaurantB.convertCostToDollarSign(2.1666666666666665);
    //Assert
    expect(convertCostToDollarSignA).toEqual('$$');
		expect(convertCostToDollarSignB).toEqual('$$');
  });



	it("convertCostToDollarSign() should return $$$", function(){
		//Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var convertCostToDollarSignA = reviewReportRestaurantA.convertCostToDollarSign(2.6);
		var convertCostToDollarSignB = reviewReportRestaurantB.convertCostToDollarSign(2.6);
    //Assert
    expect(convertCostToDollarSignA).toEqual('$$$');
		expect(convertCostToDollarSignB).toEqual('$$$');
	});

	it("convertCostToDollarSign() should return $$$$", function(){
		//Arrange
    var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
    //Act
    var convertCostToDollarSignA = reviewReportRestaurantA.convertCostToDollarSign(4.0);
		var convertCostToDollarSignB = reviewReportRestaurantB.convertCostToDollarSign(4.0);
    //Assert
    expect(convertCostToDollarSignA).toEqual('$$$$');
		expect(convertCostToDollarSignB).toEqual('$$$$');
	});

	it("summarize() should return summary of data provided", function(){
		//Arrange
		var reviewReportRestaurantA = new ReviewsReport("Restaurant A 2014", reviews.restaurantA);
		var reviewReportRestaurantB = new ReviewsReport("Restaurant B 2014", reviews.restaurantB);
		//Act
		var summarizeA = reviewReportRestaurantA.summarize();
		var summarizeB = reviewReportRestaurantB.summarize();
		//Assert
		expect(summarizeA).toEqual(
			{
				 name : 'Restaurant A 2014',
				 averageStarRating: 3.8333333333333335,
				 totalReviews: 6,
				 averageCost: {
					 numeric: 2.1666666666666665,
					 symbol: '$$'
				 }
			}
		);

		expect(summarizeB).toEqual(
			{
				 name : 'Restaurant B 2014',
				 averageStarRating: 4.142857142857143,
				 totalReviews: 7,
				 averageCost: {
					 numeric: 3.857142857142857,
					 symbol: '$$$$'
				 }
			}
		);
	});



});
