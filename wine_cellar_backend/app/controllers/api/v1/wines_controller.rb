class Api::V1::WinesController < ApplicationController

    require 'dotenv'
    # console.log(ENV['API_KEY'])

    def index
        render json: Wine.all
    end

    def create
    end

    def show
        render json: Wine.find(params[:id])
    end

    def get_options
        apikey = 'dnshedrs20210721'
        wine = 'Orin Swift'
        # wine = 'Orin Swift Mercury Head'
        vintage = '2'
        binding.pry
        url = "https://api.wine-searcher.com/x?api_key=" + apikey + "&winename=" + wine + "&vintage=" + vintage
        binding.pry
        # url = "https://api.wine-searcher.com/x?api_key=dnshedrs20210721&winename=petrus&vintage=2011"
        response = Faraday.get(url)
        render json: response

    end

end
