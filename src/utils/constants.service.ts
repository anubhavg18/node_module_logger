import { Injectable } from '@nestjs/common';

@Injectable()
export class ConstantsService {}

// List of codes which will be used while sending the responses
export const codes = {
    // 100 Series
    // These are temporary Responses
    100: 'Continue',
    101: 'Switching Protocols',
    102: 'Processing',

    // 200 Series
    // The client accepts the Request, being processed successfully at the server.
    200: 'OK',
    201: 'Created',
    202: 'Accepted',
    203: 'Non-Authoritative Information',
    204: 'No Content',
    205: 'Reset Content',
    206: 'Partial Content',
    207: 'Multi-Status',
    208: 'Already Reported',
    226: 'IM Used',

    // 300 Series
    // Most of the codes related to this series are for URL Redirection.
    300: 'Multiple Choices',
    301: 'Moved Permanently',
    302: 'Found',
    303: 'Check Other',
    304: 'Not Modified',
    305: 'Use Proxy',
    306: 'Switch Proxy',
    307: 'Temporary Redirect',
    308: 'Permanent Redirect',

    // 400 Series
    // These are specific to client-side error.
    400: 'Bad Request',
    401: 'Unauthorised',
    402: 'Payment Required',
    403: 'Forbidden',
    404: 'Not Found',
    405: 'Method Not Allowed',
    406: 'Not Acceptable',
    407: 'Proxy Authentication Required',
    408: 'Request Timeout',
    409: 'Conflict',
    410: 'Gone',
    411: 'Length Required',
    412: 'Precondition Failed',
    413: 'Payload Too Large',
    414: 'URI Too Long',
    415: 'Unsupported Media Type',
    416: 'Range Not Satisfiable',
    417: 'Expectation Failed',
    418: 'I’m a teapot',
    421: 'Misdirected Request',
    422: 'Unprocessable Entity',
    423: 'Locked',
    424: 'Failed Dependency',
    426: 'Upgrade Required',
    428: 'Precondition Required',
    429: 'Too Many Requests',
    431: 'Request Header Fields Too Large',
    451: 'Unavailable For Legal Reasons',

    // 500 Series
    // These are specific to the server-side error.
    500: 'Internal Server Error',
    501: 'Not Implemented',
    502: 'Bad Gateway',
    503: 'Service Unavailable',
    504: 'Gateway Timeout',
    505: 'HTTP Version Not Supported',
    506: 'Variant Also Negotiates',
    507: 'Insufficient Storage',
    508: 'Loop Detected',
    510: 'Not Extended',
    511: ' Network Authentication Required',

    // 3rd party url endpoints
    config: {
    method: 'get',
    url: 'https://api.github.com/users/quen2404',
    headers: {},
    },

    postConfig: {
    method: 'post',
    url: 'https://reqbin.com/sample/post/json',
    headers: { },
    }
};

export const baseUrl = `https://test.saudia.airlines.api.amadeus.com/airlines/SV/v2/shopping`
// AMADEUS url endpoints
export const amad_urls = {
    shopping : {
        cart: {
            url: `${baseUrl}`
        },
        contacts: {
            url: `${baseUrl}`,
            // url: https://test.saudia.airlines.api.amadeus.com/airlines/SV/v2/shopping/carts/$cartId$/contacts?guestOfficeId=JEDSV08AA&language=en&useTest=true
        },
        services:{
            url: `${baseUrl}`,
            // url: https://test.saudia.airlines.api.amadeus.com/airlines/SV/v2/shopping/carts/$cartId$/services?guestOfficeId=JEDSV08AA&language=en&useTest=true
        },
        travelers:{
            url: `${baseUrl}`,
            // url: https://test.saudia.airlines.api.amadeus.com/airlines/SV/v2/shopping/carts/$cartId$/travelers/$travelerId$?lastName=$lastName$&guestOfficeId=WASSV08AA&language=en&useTest=true
        },
    },   
}

export default amad_urls;