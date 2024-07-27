$(document).ready(function(){
    const products = [
        {
            id: 1,
            messageContent: 'Great service!',
            name: 'John Doe',
            imageSource: 'img/Nissy/Newimages/3.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 2,
            messageContent: 'Loved the experience! sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
            name: 'Jane Smith',
            imageSource: 'img/Nissy/Newimages/2.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 3,
            messageContent: 'Amazing products!fffffffffffffffffffffffffffffffffffwerweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            name: 'Mike Johnson',
            imageSource: 'img/Nissy/Newimages/4.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 4,
            messageContent: 'Very satisfied! fffffffffffffffffffffffffffffffffffwerweeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
            name: 'Emily Davis',
            imageSource: 'img/Nissy/Newimages/5.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 5,
            messageContent: 'Highly recommend!',
            name: 'William Brown',
            imageSource: 'img/Nissy/Newimages/6.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 6,
            messageContent: 'Highly recommend!',
            name: 'William Brown',
            imageSource: 'img/Nissy/Newimages/6.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 7,
            messageContent: 'Highly recommend!',
            name: 'William Brown',
            imageSource: 'img/Nissy/Newimages/6.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 8,
            messageContent: 'Highly recommend!',
            name: 'William Brown',
            imageSource: 'img/Nissy/Newimages/6.jpg',
            reviewingPersonRole: "Customer"
        },
        {
            id: 9,
            messageContent: 'Highly recommend!',
            name: 'William Brown',
            imageSource: 'img/Nissy/Newimages/6.jpg',
            reviewingPersonRole: "Customer"
        },
    ];

    function getTestimonial() {
        const imageUrlBase = ''; // Add base URL if needed
        const TestimonialContainer = $('#TestimonialContainer');

        products.forEach(function(testimonial) {
            const TestimonialHTML = `
                <div class="item">
                    <div class="card testimony-wrap">
                        <div class="card-body d-flex">
                            <div class="user-img" style="background-image: url('${imageUrlBase}${testimonial.imageSource}');"></div>
                            <div class="text pl-4">
                                <span class="quote d-flex align-items-center justify-content-center">
                                    <i class="fa fa-quote-left"></i>
                                </span>
                                <p class="testimonial-content text-justify" data-full-text="${testimonial.messageContent}">${testimonial.messageContent}</p>
                                <p class="name">${testimonial.name}</p>
                                <span class="position">${testimonial.reviewingPersonRole}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            TestimonialContainer.append(TestimonialHTML);
        });

        TestimonialContainer.owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1 
                },
                768: {
                    items: 2
                },
                1024: {
                    items: 3 
                }
            }
        });
    }

    getTestimonial();
});