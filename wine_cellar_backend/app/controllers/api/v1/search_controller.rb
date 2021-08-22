class Api::V1::SearchController < ApplicationController

def index

# wine_info = ''

# if params['wine_info']
# if wine_info
    if 1 == 1
        # @response = Openwines::Search.with_info(params['wine_info'])
        # @response = Openwines::Search.with_info()
        @response = Openwines::Search
    end

    render @response
end

end