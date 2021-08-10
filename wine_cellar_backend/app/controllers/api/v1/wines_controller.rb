class api::v1::WinesController < ApplicationController

    def index
        render json: Wine.all
    end

    def create
    end

    def show
        render jston: Wine.find(parrams[:id])
    end

end
