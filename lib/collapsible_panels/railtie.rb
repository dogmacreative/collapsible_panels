require 'collapsible_panels/sortable_helpers'
module CollapsiblePanels
  class Railtie < Rails::Railtie
    initializer "collapsible_panels.sortable_helpers" do
      ActiveAdmin::ViewHelpers.send :include, SortableHelpers
    end
  end
end