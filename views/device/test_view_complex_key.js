		map = function(doc) {
			if (doc.java_type == 'org.taktik.icure.entities.Device' && !doc.deleted && !!doc.externalId) {
				emit([doc.externalId, doc._id], null)
			}
		}
