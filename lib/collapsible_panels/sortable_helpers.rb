module CollapsiblePanels
  module SortableHelpers

    def sortable_panel(collection, title = nil, field = :name, polymorphic = false, disabled = false)
      klass = collection.base_class
      class_name = klass.name.underscore
      pluralized_class = class_name.pluralize
      p = model_prefix class_name
      render partial: "admin/sortable_panel", locals: {
        collection: collection,
        title: title,
        klass: klass,
        class_name: class_name,
        pluralized_class: pluralized_class,
        field: field,
        p: p,
        polymorphic: polymorphic,
        disabled: disabled
      }
    end

    def model_prefix(class_name)
      "#{class_name}_#{Time.now.to_i.to_s}"
    end

    def unique_id(p, field)
      "#{p}_#{field.to_s}"
    end

  end
end